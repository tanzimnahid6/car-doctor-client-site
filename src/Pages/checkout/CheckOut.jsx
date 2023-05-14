import React, { useContext } from "react"
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider"

const CheckOut = () => {
  const service = useLoaderData()
 
  const { _id, service_id, title, price } = service
  const { user } = useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target
    const name = form.name.value
    const date = form.date.value
    const email = form.email.value
    const booking = {
      customerName: name,
      email: email,
      date,
      service_id: _id,
      service: title,
      price: price,
    }
    console.log(booking)

    fetch("http://localhost:5000/bookings", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.insertedId){
            alert('service booked successfully')
        }
      })
  }
  return (
    <div>
      <h2 className="text-center text-3xl">Booking Services:{title}</h2>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  defaultValue={user?.displayName}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  defaultValue={user?.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  defaultValue={"$" + price}
                />
              </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-error"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckOut
