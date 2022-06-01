import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footerContainers">
        <div className="fone">
          <ul>
            <h3 style={{fontWeight:'bold'}}>INFORMATION</h3>
            <a href>
              <li className="flinee"> About Us</li>
            </a>
            <a href>
              <li className="flinee">Contact Us</li>
            </a>
          </ul>
        </div>

        <div className="ftwo">
          <ul>
            <h3 style={{fontWeight:'bold'}}>CUSTOMER SERVICE</h3>
            <a href>
              <li className="flinee">Security Policy</li>
            </a>
            <a href>
              <li className="flinee">Orders, Stock Availability & Pricing</li>
            </a>
            <a href>
              <li className="flinee">Shipping & Replacement</li>
            </a>
            <a href>
              <li className="flinee"> Privacy Policy</li>
            </a>
            <a href>
              <li className="flinee"> Terms of Use</li>
            </a>
          </ul>
        </div>

        <div className="fthree">
          {/* <ul>
            <h3>MY ACCOUNT</h3>
            <a href><li> About</li></a>
            <a href><li> We are hiring!</li></a>
            <a href><li> Terms &amp; Conditions</li></a>
            <a href><li> Privacy Policy</li></a>
            <a href><li> Terms &amp; Conditions</li></a>
          </ul> */}
        </div>

        <div className="ffour">
          <div className="iosNandroid">
            <img
              src="img/ios.png"
              style={{ width: "150px", height: "60px", marginTop: "10px" }}
              alt="..."
            />
            <img
              src="img/android.png"
              style={{ width: "150px", height: "60px", marginTop: "10px" }}
              alt="..."
            />
          </div>
        </div>

        <div className="ffive">
          <ul>
            <h3 style={{fontWeight:'bold'}}>CONTACT US</h3>
            <div className="ggi">
          
              <img
                src="img/locationicon.png"
                style={{ width: "28px", height: "25px", marginTop: "10px" }}
                alt="..."
              />
              <a href>
                <li style={{fontWeight:'bold'}}>
                  {" "}
                  House: 31/A, Dhanmondi-8, Dhaka
                </li>
              </a>
            </div>

            <div className="ggi">
          
          <img
            src="img/gmailicon.png"
            style={{ width: "35px", height: "35px", marginTop: "10px" }}
            alt="..."
          />
          <a href>
            <li style={{fontWeight:'bold'}}>
              {" "}
              support@bdecom.com
            </li>
          </a>
        </div>

            
        <div className="ggi">
          
          <img
            src="img/phoneicon.png"
            style={{ width: "25px",marginLeft:'5px', height: "26px", marginTop: "10px" }}
            alt="..."
          />
          <a href>
            <li style={{fontWeight:'bold'}}>
              {" "}
              +8801777975237
            </li>
          </a>
        </div>

            
            
          </ul>
          <div>
            <div className="uui">
              <a href="www.fb.com" className="fa fa-facebook" />
              <a href="#" className="fa fa-twitter" />
              <a href="#" className="fa fa-google" />
              <a href="#" className="fa fa-linkedin" />
            </div>
          </div>
        </div>

        <div className="fsix">
          <p style={{fontWeight:'bold'}}>
            Copyright © 2021 BD ECom, a concern of Invariant Telecom Bangladesh
            Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
