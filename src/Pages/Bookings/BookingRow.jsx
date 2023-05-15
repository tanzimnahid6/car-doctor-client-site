import { useState } from "react"

const BookingRow = ({ booking,setBookings,bookings }) => {

  const { _id,customerName, email, service_id, date, service, img,price } = booking



  const handleDelete =(id)=>{
    
    const proceed = confirm('Are you sure you want to delete')
    if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
           
            if(data.deletedCount>0){
                alert('Data deleted successfully')
            }
           const remaining =  bookings.filter((b)=>b._id!==id)
           setBookings(remaining)
        })
    }

  }
  const handleStatus=(id)=>{
    fetch(`http://localhost:5000/bookings/${id}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({status:'confirm'})
    }
    )
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
       //updated status
        }
    })
  }

  return (
    <>
      <tr>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={
                    img
                      ? img
                      : "https://fastly.picsum.photos/id/228/200/300.jpg?hmac=A6oUMz6rMYY00q0GJfUDf_sU2uPTrqbUHVQykZQtZDU"
                  }
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{customerName}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          {service}
          <br />
          <span className="badge badge-ghost badge-sm">{service_id}</span>
        </td>
        <td>{price}</td>
        <td>{date}</td>
        <th>
          <button onClick={()=>handleStatus(_id)} className="btn btn-ghost btn-xs">Confirm</button>
        </th>
      </tr>
    </>
  )
}

export default BookingRow
