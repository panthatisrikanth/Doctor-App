import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Home.css"
const Home = () => {
  let negative=useNavigate()
  
  return (
    <div>
      <div class="sidebar">
        <Link className='active' to="/login">Login</Link>
        <Link className='active' to="/login">Login</Link>
        <Link className='active' to="/login">Login</Link>
        <Link className='active' to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Home