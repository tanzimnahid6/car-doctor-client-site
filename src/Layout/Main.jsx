import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../Shared/Footer"
import NavBar from "../Routes/NavBar"

const Main = () => {
  return (
    <div >
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
