import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'


function Navbar() {
  return (

    <>
      <div className='navcontainer'>
        <ul className='navv'>
          <div className='logo'>
            <Link className='logolink' to="/"><h3  style={{fontWeight:'bold'}} >BD <span className='logospan'>ECom</span></h3></Link>
          </div>
          <div className='searchh responlnk'>
            <input className='inp' placeholder="Search Here" />
            <button className='inpsearch' ><i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
          <li  style={{fontWeight:'bold'}}> <Link className='lnk responlnk' to="/">Home</Link> </li>
          <li  style={{fontWeight:'bold'}}> <Link className='lnk responlnk' to="/about">Top Sell</Link> </li>
          <li  style={{fontWeight:'bold'}}> <Link className='lnk responlnk' to="/contact">Offers</Link> </li>
          <li> <Link className='lnk responseright' to="/addtocart"><img style={{ height: '40px' }} src='img/addtocart.png' alt='kii' /></Link> </li>
          <li> <Link className='lnk responserightmar' to="/wishlist"><img style={{ height: '40px' }} src='img/wishlistt.png' alt='kii' /></Link> </li>
          <li> <Link className='lnk responlnk' to="/profile"><img style={{ height: '30px' }} src='img/proo.png' alt='kii' /></Link> </li>
          <li> <Link className='lnk responlnk' to="/admin"><img style={{ height: '35px' }} src='img/Admin.png' alt='kii' /></Link> </li>

        </ul>

      </div>
    </>
  )
}

export default Navbar
