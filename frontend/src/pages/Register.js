import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    let negative=useNavigate()
    const [successMessage, setSuccessMessage] = useState('');
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setUserDetails({
          ...userDetails,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (res) => {
        if(userDetails.name && userDetails.email && userDetails.password)
        {
            axios.post("http://localhost:5000/user/register",userDetails).then((res)=>{
            setSuccessMessage('Account created successfully!');
            setTimeout(()=>{
                negative("/")
            },2000)
            console.log(res.data)
        })
        }
        else{
            console.log("fjkfjd")
        }
        
    
      };
    
      return (
        <div className="center-container">
          <div className="card custom-card">
            <div className="card-body">
              <h2 className="card-title mb-4">Registration Form</h2>
              {successMessage && (
            <div className="alert alert-success" id="liveAlertBtn" role="alert">
              {successMessage}
            </div>
          )}
              <div>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your full name"
                    value={userDetails.nameame}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="name@example.com"
                    value={userDetails.email}
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
                    value={userDetails.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Register
                </button>
               
                <p className="mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
              </div>
            </div>
          </div>
        </div>
        
      );
   
}

export default Register