import React, { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"

const PrivetRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (loading) {
    return (
      <div>
        <progress className="progress  w-56"></progress>
      </div>
    )
  }

  if (user?.email) {
    return children
  }
  return <Navigate state={{from:location}} to="/login" replace></Navigate>
}

export default PrivetRout
