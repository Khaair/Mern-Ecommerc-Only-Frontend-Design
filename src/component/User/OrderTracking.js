import React from 'react'
import { Link } from "react-router-dom";
import './OrderTracking.css'



export default function OrderTracking() {
  return (
    <>
      <div className='otcontainer'>
        <div className='otinnercontainer' >
          <div className='otone'>
            <h4>Estimated Delibary Time:<h5> 25 May,2022</h5></h4>
            <div className='otonenn'>
            <p style={{textAlign:'justify'}}>Monday, 08:00 am to 10:00 am</p>
            </div>
          
          </div>

          <div className='otone'>
            <h3>Delibary Time:<h5> 25 May,2022</h5></h3>
            <div className='otonenn'>
            <p style={{textAlign:'justify'}}>Monday, 08:00 am to 10:00 am</p>
            </div>
          </div>

          <div className='otone'>
            <h3>Status:</h3>
            <button className='orderbtn'> Pending</button>
          </div>

        </div>

        <hr></hr>

        <br></br>

        <div className='otoutercon'>
          <div className='otouterone'>

          <div className='otouteroneimgdiv'>
          <img className='otouteroneimg' src='img/p1.jpg'alt='ff'/>

            </div>
            <div className='llg'>
            <h3>Laptop 450 G2</h3>
            
            <p style={{textAlign:'justify'}}>About HP ProBook 450 G3 (T3L12UT) Laptop (Core i5 6th Gen/4 GB/500 GB/Windows 7) ; memory slots, 2 ; ram speed, 1600 Mhz ; capacity, 4 GB ; display type, LED. Graphic processor: Intel HD</p>
            </div>
           
          </div>

          <div className='otouterone'>
            <div className='otouteroneimgdiv'>
          <img className='otouteroneimg' src='img/p1.jpg'alt='ff'/>

            </div>

          <div className='llg'>
            <h3>Laptop 450 G3</h3>
            
            <p style={{textAlign:'justify'}}>About HP ProBook 450 G3 (T3L12UT) Laptop (Core i5 6th Gen/4 GB/500 GB/Windows 7) ; memory slots, 2 ; ram speed, 1600 Mhz ; capacity, 4 GB ; display type, LED. Graphic processor: Intel HD</p>
            </div>


          </div>
        </div>

        <hr className='hrr'></hr>






        <Link to="/order"><td><button className='orderbtn'>Back</button></td></Link>

      </div>







    </>

  )
}
