import React from 'react'
import './footer.css'
import Nav from "react-bootstrap/Nav";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { CiPhone } from "react-icons/ci";
const Footer = () => {
  return (
        <footer id="footer">
        <div className="footer-top">
          <div className="container pt-4">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="footer-link">
                  <h5>Company</h5>
                  <ul>
                    <li>
                      <Nav.Link className="hovr" href="/home">
                        Home
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="hovr" href="/moitech">
                        Moitech App
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="hovr" href="/contactus">
                        Contact Us
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="hovr" href="/login">
                        Login
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="hovr" href="/Register">
                        Register
                      </Nav.Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="footer-link">
                  <h5>Contact</h5>
                  <div className="contact-slide">
                    <SlLocationPin /> &nbsp; &nbsp;
                    <span>MoiTech</span>
                    <br />
                    <p>
                      Madurai, Tamil Nadu 625011
                    </p>
                    <CiPhone /> &nbsp; &nbsp;
                    <span>+91-0123456789</span> <br />
                    <CiPhone /> &nbsp; &nbsp;
                    <span>+91-0123456789</span> <br />
                    <MdOutlineEmail /> &nbsp; &nbsp;
                    <span>MoiTechsoftware.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>Copyright © 2025 - Velkani | All rights reserved.</p>
          </div>
        </div>
       </footer>
   )
}

export default Footer