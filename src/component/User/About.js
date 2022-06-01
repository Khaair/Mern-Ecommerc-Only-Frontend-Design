import React from 'react'
import './Home.css'
import PCard from './PCard';
import { Link } from "react-router-dom";
import Footer from './Footer'


export default function About() {
  return (
    <div>
                    <div className="four">
          <h3 className='marr' style={{fontWeight:'bold'}}>Top Sell Product</h3>


          <div className='cardd'>
            <Link className='llnk' to="/single"><PCard/></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
          </div>

          <div className='cardd'>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>



          </div>

          <h3 className='marr' style={{fontWeight:'bold'}}>New Arrivals</h3>

          <div className='cardd'>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
          </div>

          <h3 className='marr' style={{fontWeight:'bold'}}>Laptop & Computer</h3>

          <div className='cardd'>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
