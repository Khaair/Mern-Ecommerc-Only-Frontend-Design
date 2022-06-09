import React from 'react'
import { Link } from "react-router-dom";
import './Payment.css'


export default function Payment() {
    return (
        <div>
            <div className="div1">
                <div className="pcontainerss">
                    <h2 style={{color:'black',fontWeight:'bold'}}>Payment System</h2>
                    <hr></hr>
                <Link to="/order"><button className='paymentbtn'>Order</button></Link>
                  
                </div>
                
                </div>


        </div>
    )
}
