import React from 'react'
import { Link } from 'react-router-dom'
import './OrderManage.css'
export default function OrderManage() {
  return (
    <>

      <div className='orcontainerss' >
        <h2 style={{color:'black',fontWeight:'bold'}}>Order Manage </h2>
        <table>
          <tbody><tr>
            <th>SL</th>
            <th>Order ID</th>
            <th>Status</th>
            <th>Date/Time</th>
            <th>Invoices</th>
            <th>Order Details</th>
            <th>Action</th>

          </tr>
          <tr>
              <td>01</td>
              <td>x12345tt</td>
              <td>Pending</td>
            
              <td>04.05.2022</td>
              
              <td><button  className='ordermanagebtn'>Print</button></td>
              <td>Anywhere in BD</td>
                             
              <td>
              <Link to="/editorder"><td><button className='ordermanagebtn'>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>
            <tr>
              <td>02</td>
              <td>rr33543tu</td>
              <td>Pending</td>
            
              <td>04.05.2022</td>
              
              <td><button  className='ordermanagebtn'>Print</button></td>
              
              <td>Anywhere in BD</td>
              
              
              <td>
              <Link to="/ordertracking"><td><button className='ordermanagebtn'>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>
            <tr>
              <td>03</td>
              <td>x12345tf</td>
              <td>Delibaried</td>
            
              <td>04.05.2022</td>
              
              <td><button  className='ordermanagebtn'>Print</button></td>
              
              <td>Anywhere in BD</td>
              
              
              <td>
              <Link to="/ordertracking"><td><button className='ordermanagebtn'>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>
          

            <tr>
              <td>04</td>
              <td>x12345oo</td>
              <td>Pending</td>
            
              <td>04.05.2022</td>
              <td><button  className='ordermanagebtn'>Print</button></td>
              
              <td>Anywhere in BD</td>
              
              
              <td>
              <Link to="/ordertracking"><td><button className='ordermanagebtn'>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>


            <tr>
              <td>05</td>
              <td>x12345rr</td>
              <td>Pending</td>
            
              <td>05.04.2022</td>
              <td><button  className='ordermanagebtn'>Print</button></td>
              
              <td>Anywhere in BD</td>
              
              <td>
              <Link to="/ordertracking"><td><button className='ordermanagebtn'>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>



 

        
          </tbody></table>
      </div>
    </>
  )
}
