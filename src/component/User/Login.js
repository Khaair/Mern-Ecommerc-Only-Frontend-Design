import React from 'react'

import { Link } from "react-router-dom";
import ProfileNav from './ProfileNav';
import './Login.css'



export default function Login() {
  return (
    <div>
      <ProfileNav />
      <div className="div1">
        
          <div className="lcontainer">
            <h3 style={{color:'#00156A',fontWeight:'bold'}}>Login Form</h3>
            <hr></hr>
            <form>
              <label className="name">Email</label>
              <br />
              <input className="text" type="text" name placeholder="Enter Email" />
              <br />
              <label className="name">Password</label>
              <br />
              <input className="text" type="password" name placeholder="Enter Password" />
              <br></br>

              <Link to="/"><button className="loginbtnn">Log in</button></Link>
            </form>
          </div>
        </div>
      </div>

  
  )
}
