import React from 'react'
import './Navbarthree.css'
import {Link} from "react-router-dom";



export default function Navbarthree() {
  return (
    <div>
        <div>
  <nav>
    <div className="logo">
      Brand
    </div>
    <input type="checkbox" id="click" />
    <label htmlFor="click" className="menu-btn">
      <i className="fas fa-bars" />
    </label>
    <ul>
    <li  style={{fontWeight:'bold'}}> <Link className='lnk' to="/">Home</Link> </li>
          <li  style={{fontWeight:'bold'}}> <Link className='lnk' to="/about">Top Sell</Link> </li>
          <li  style={{fontWeight:'bold'}}> <Link className='lnk' to="/contact">Offers</Link> </li>
          <li> <Link className='lnk' to="/addtocart"><img style={{ height: '40px' }} src='img/addtocart.png' alt='kii' /></Link> </li>
          <li> <Link className='lnk' to="/wishlist"><img style={{ height: '40px' }} src='img/wishlistt.png' alt='kii' /></Link> </li>
          <li> <Link className='lnk' to="/profile"><img style={{ height: '30px' }} src='img/proo.png' alt='kii' /></Link> </li>
          <li> <Link className='lnk' to="/admin"><img style={{ height: '35px' }} src='img/Admin.png' alt='kii' /></Link> </li>
    </ul>
  </nav>

</div>

    </div>
  )
}
