import React from 'react'
import ProfileNav from './ProfileNav';

import './UserProfile.css'
export default function UserProfile() {
  return (
    <div>
     <ProfileNav/>
      <div className="profileContainer">
        <div className="pone">
         
          <img   className='imgg ootouteroneimgdiv' src='img/man.jpg' alt='hhh' />
          
         
        </div>
        <div className="ptwo">
          <h6>ID: 23456789</h6>
          <h6>User Name: Khair</h6>


          <h6>Email: khair.cse.iu@gmai.com</h6>
          <h6>Status: Pending</h6>
          <h6>Transaction: Pending</h6>
          <h6>Address: Road-11,Jatrabari,Dhaka</h6>
      <button className="profilebtn">Log Out</button>

        </div>
        
      </div>

    </div>
  )
}
