import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import BookingRow from "./BookingRow"

const Bookings = () => {
  const { user,loading } = useContext(AuthContext)
  const [bookings, setBookings] = useState([])
  const url = `http://localhost:5000/bookings?email=${user?.email}`
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data))
  }, [url])

  if (loading) {
    return (
      <div>
        <progress className="progress w-full"></progress>
      </div>
    )
  }
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label></label>
            </th>
            <th className="">Name</th>
            <th>Work</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {bookings.map((booking) => (
            <BookingRow booking={booking} key={booking._id}></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Bookings
