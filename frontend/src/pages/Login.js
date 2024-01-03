import React, { useEffect } from 'react'
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"
import axios from 'axios';
import Cookies from 'js-cookie';
const Login = () => {
  let negative=useNavigate()
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value
    });
  };
  useEffect(()=>{
    let token=Cookies.get("token")
    if(token){
      negative("/")
    }
  },[])
  const handleLogin = async () => {
    axios.post("http://localhost:5000/user/login",loginDetails).then((res)=>{
      if(res.data.success){
        Cookies.set("token",res.data.token)
        Cookies.set("email",res.data.email)
        Cookies.set("isAdmin",res.data.isAdmin)
        Cookies.set("isDoctor",res.data.isDoctor)
        negative("/")
      }
      else(
        setErrorMessage(res.data.msg)
      )
    })
  };
  return (
    <>
     <div className="center-container">
      <div className="card custom-card">
        <div className="card-body">
          <h2 className="card-title mb-4">Login</h2>

          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="name@example.com"
              value={loginDetails.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter your password"
              value={loginDetails.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>

          <p className="mt-3">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login