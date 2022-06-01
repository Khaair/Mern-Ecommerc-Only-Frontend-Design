import React from 'react'
import Footer from './Footer';
import './Home.css'
import PCard from './PCard';
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <div className="containers">
        <div className="one">
        </div>
        <div className="two">
          <ul className="list-group">
            <li className="list-group-item colorr"  style={{fontWeight:'bold'}} >Categories</li>
            <li className="list-group-item colorr" style={{fontWeight:'bold'}}>Electric</li>
            <li className="list-group-item colorr"  style={{fontWeight:'bold'}}>Laptop & Computer</li>
            <li className="list-group-item colorr"  style={{fontWeight:'bold'}}>Health & Beauty</li>
            <li className="list-group-item colorr"  style={{fontWeight:'bold'}}>Mom And Baby</li>
            <li className="list-group-item colorr"  style={{fontWeight:'bold'}}>Watches & Sunglasses</li>
            <li className="list-group-item colorr"  style={{fontWeight:'bold'}}>Accessories</li>
            <li className="list-group-item colorr"  style={{fontWeight:'bold'}}>Home & Living</li>
            <li className="list-group-item colorr"  style={{fontWeight:'bold'}}>TGroceries</li>

          </ul>

        </div>
        <div className="three">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/p1.jpg" style={{ width: '950px', height: '400px' }} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="img/p2.jpg" style={{ width: '950px', height: '400px' }} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="img/p3.jpg" style={{ width: '950px', height: '400px' }} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="four">
          <h3 className='marr'  style={{fontWeight:'bold'}}>Feature Product</h3>


          <div className='cardd'>
            <Link className='llnk' to="/single"><PCard /></Link>
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
        <div className="five">
          <Footer />

        </div>
      </div>

    </div>
  )
}

export default Home;