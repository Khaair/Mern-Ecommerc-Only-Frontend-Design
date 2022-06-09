import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'


function NavbarTwo() {
  return (

    <>
      <div className='navcontainer'>
        <ul className='navv'>
          
          <div className='searchhnavtwo'>
            <input className='inp' placeholder="Search Here" />
            <button className='inpsearch' ><i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
          <li> <Link className='lnk' to="/profile"><img style={{ height: '30px' }} src='img/proo.png' alt='kii' /></Link> </li>

     

        </ul>

      </div>
    </>
  )
}

export default NavbarTwo
