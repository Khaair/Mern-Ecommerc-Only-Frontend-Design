import React from 'react'
import './Checkout.css'
import { Link } from "react-router-dom";
export default function Checkout() {
    return (
        <div>
            <div className="div1">
                <div className="ccontainerss">
                    <h2  style={{color:'black',fontWeight:'bold'}}>Billing Address</h2>
                    <hr></hr>
                    <form>
                        <label className="name">First Name</label>
                        <br />
                        <input className="text" type="text" name placeholder="First Name" />
                        <br />


                        <label className="name">Last Name</label>
                        <br />
                        <input className="text" type="text" name placeholder="Last Name" />
                        <br />

                        <label className="name">Address</label>
                        <br />
                        <input className="text" type="text" name placeholder="Address" />
                        <br />
                        <label className="name">Phone Number</label>
                        <br />
                        <input className="text" type="text" name placeholder="Address" />
                        <br />

                        <label className="name">Zip</label>
                        <br />
                        <input className="text" type="text" name placeholder="Zip" />
                        
                      
                        
                 
                       
                        <Link to="/payment"><button className="placebutton">Place Order</button></Link>
                    </form></div></div>

        </div>
    )
}
