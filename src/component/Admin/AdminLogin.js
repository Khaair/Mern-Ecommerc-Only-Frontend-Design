import React from 'react'
import { Link } from "react-router-dom";
import './Adminlogin.css'



export default function AdminLogin() {
  return (
    <div>
        <div className="div1">
                <div className="adcontainer">
                    <h2 style={{color:'#00156A',fontWeight:'bold'}}>Admin Login Form</h2>
                    <hr></hr>
                    <form>
                        <label className="name">Email</label>
                        <br />
                        <input className="text" type="text" name placeholder="Enter Email" />
                        <br />
                        <label className="name">Password</label>
                        <br />
                        <input className="text" type="password" name placeholder="Enter Password" />

                        <Link to="/deshboard"><button className="adminloginbtn">Log in</button></Link>



                    </form>
                </div>
            </div>

    </div>
  )
}
