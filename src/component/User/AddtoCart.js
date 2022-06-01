import React from "react";
import "./AddtoCart.css";
import { Link } from "react-router-dom";

export default function AddtoCart() {
  return (
    <div>
      <div className="div1">
        <div className="Addcontainer">
          <div className="titlee">
            <h2>My Cart</h2>
            <Link to="/">
              <button className="addbtnn">Continue Shoping</button>
            </Link>
          </div>

          <div className="addtocartone">
            <img className="addtocartimg" src="img/p1.jpg" alt="loo" />
            <div className="adddetails">
              <h3>Laptop 450 G2</h3>
              <p className='cartpdetails'>
                About HP ProBook 450 G3 (T3L12UT) Laptop (Core i5 6th Gen/4
                GB/500 GB/Windows 7) ; memory slots, 2 ; ram speed, 1600 Mhz ;
                capacity, 4 GB ; display type, LED. Graphic processor: Intel HD
                 
              </p>
            </div>
          </div>

          <hr></hr>

          <div className="addtocartone">
            <img className="addtocartimg" src="img/p1.jpg" alt="loo" />
            <div className="adddetails">
              <h3>Laptop 450 G3</h3>
              <p className='cartpdetails'>
                About HP ProBook 450 G3 (T3L12UT) Laptop (Core i5 6th Gen/4
                GB/500 GB/Windows 7) ; memory slots, 2 ; ram speed, 1600 Mhz ;
                capacity, 4 GB ; display type, LED. Graphic processor: Intel HD
              </p>
            </div>
          </div>

          <hr></hr>
          <div>
            <input className="text" type="text" name placeholder="Cupon Code" />

            <div className="llk">
              <button className="cuponbtn">Submit</button>
              <Link to="/checkout">
                <button className="checkoutbtnn">Check Out</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
