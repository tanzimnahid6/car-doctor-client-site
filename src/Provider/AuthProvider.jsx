import React, { createContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from "firebase/auth"
import app from "../firebase.config"
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  //create user by email and password ===========

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //sign in email and password====================
  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  //Set Observer -======================
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log("current user", currentUser)
      setLoading(false)
    })
    return unSubscriber
  }, [])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
