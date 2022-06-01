import React from 'react'
import { Link } from 'react-router-dom'
import './ProductManage.css'
export default function ProductManage() {
  return (
    <>

      <div className='orcontainerss'>
        <h2 style={{color:'black',fontWeight:'bold'}}>Product Manage</h2>
        <table>
          <tbody><tr>
            <th>ID</th>
            <th>Title</th>
            <th>SKU Number</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Weight</th>
            <th>Category</th>
            <th>Action</th>

          </tr>
            <tr>
              <td>23243565</td>
              <td>Laptop 450 G2</td>
              <td>4453</td>
            
              <td>core i5</td>
              <td>50000 taka</td>
              <td>1</td>
              <td>250g</td>
              <td>LAPTOP</td>
              <td>
              <Link to="/editproduct"><td><button className='ordermanagebtn'>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>
            <tr>
            <td>23235565</td>
              <td>Laptop 450 G3</td>
              <td>4453</td>
            
              <td>core i5</td>
              <td>45000 taka</td>
              <td>1</td>
              <td>250g</td>
              <td>LAPTOP</td>
              <td>
              <Link to="/ordertracking"><td><button className='ordermanagebtn'>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>
            <tr>
            <td>45243565</td>
              <td>HP Probook t5</td>
              <td>3567</td>
            
              <td>core i5</td>
              <td>50000 taka</td>
              <td>1</td>
              <td>250g</td>
              <td>LAPTOP</td>
              <td>
              <Link to="/ordertracking"><td><button className='ordermanagebtn'>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>
            <tr>
            <td>23243565</td>
              <td>Laptop 450 G2</td>
              <td>9876</td>
            
              <td>core i5</td>
              <td>50000 taka</td>
              <td>1</td>
              <td>250g</td>
              <td>LAPTOP</td>
              <td>
              <Link to="/ordertracking"><td><button className='ordermanagebtn'>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>
            <tr>
            <td>23243565</td>
              <td>Laptop 450 G2</td>
              <td>2345</td>
            
              <td>core i5</td>
              <td>60000 taka</td>
              <td>1</td>
              <td>250g</td>
              <td>LAPTOP</td>
              <td>
              <Link to="/editproduct"><td><button className='ordermanagebtn'>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>

        
          </tbody></table>
      </div>
    </>
  )
}
