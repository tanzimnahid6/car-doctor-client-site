import React, { useContext } from "react"
import img from "./../../../src/assets/images/login/login.svg"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider"

const Login = () => {
  const { signIn,setUser } = useContext(AuthContext)
  const location = useLocation() 
  const navigate = useNavigate()
  const path = location.state?.from?.pathname || '/'

  const handleLogin = (e) => {
    e.preventDefault()
    
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    console.log(email, password)
    signIn(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      setUser(user)
      navigate(path,{replace:true})

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });

  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" mr-12 w-1/2 ">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl text-center font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              {/* Form start========== */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-error" type="submit" value="Login" />
              </div>
            </form>
            <div className="text-center">
              <p>
                New To Car Doctors ?{" "}
                <Link className="text-orange-400" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
