import React from 'react'
import './Order.css'
import { Link } from "react-router-dom";


export default function Order() {
  return (
    <div>
      <div className='orcontainerss'>
        <h2 style={{color:'black',fontWeight:'bold'}}>Order</h2>
        <table>
          <tbody><tr>
            <th>SL</th>
            <th>Order ID</th>
            <th>Status</th>
            <th>Date/Time</th>
            <th>Invoices</th>
            <th>Order Details</th>

          </tr>
            <tr>
              <td>01</td>
              <td>56474</td>
              <td><button className='orderbtn'>Order</button></td>
              <td>20.04.2022</td>
              <td><button className='orderbtn'>Print</button></td>
              <Link to="/ordertracking"><td><button className='orderbtn'>Check</button></td></Link>
            </tr>
            <tr>
              <td>02</td>
              <td>44899</td>
              <td><button className='orderbtn'>Pending</button></td>
              <td>06.05.2022</td>
              <td><button className='orderbtn'>Print</button></td>
              
              <Link to="/ordertracking"><td><button className='orderbtn'>Check</button></td></Link>
            </tr>
            <tr>
              <td>03</td>
              <td>40043</td>
              <td><button className='orderbtn'>Order</button></td>
              <td>20.04.2022</td>
              <td><button className='orderbtn'>Print</button></td>
              <Link to="/ordertracking"><td><button className='orderbtn'>Check</button></td></Link>
            </tr>
            <tr>
              <td>04</td>
              <td>39847</td>
              <td><button className='orderbtn'>Order</button></td>
              <td>06.05.2022</td>
              <td><button className='orderbtn'>Print</button></td>
              <Link to="/ordertracking"><td><button className='orderbtn'>Check</button></td></Link>
            </tr>
          </tbody></table>
      </div>

    </div>
  )
}
