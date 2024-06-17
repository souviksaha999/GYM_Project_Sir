import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
<div>
  <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
    <div className="row pt-5">
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-primary mb-4">Get In Touch</h4>
        <p><i className="fa fa-map-marker-alt mr-2" />123 Street, Salt Lake, Kolkata</p>
        <p><i className="fa fa-phone-alt mr-2" />+012 345 67890</p>
        <div className="d-flex justify-content-start mt-4">
          <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: 40, height: 40}} href="#"><i className="fab fa-twitter" /></a>
          <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: 40, height: 40}} href="#"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: 40, height: 40}} href="#"><i className="fab fa-linkedin-in" /></a>
          <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: 40, height: 40}} href="#"><i className="fab fa-instagram" /></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-primary mb-4">Quick Links</h4>
        <div className="d-flex flex-column justify-content-start">
          <Link className="text-white mb-2" to="/"><i className="fa fa-angle-right mr-2" />Home</Link>
          <Link className="text-white mb-2" to="/about"><i className="fa fa-angle-right mr-2" />About Us</Link>
          <Link className="text-white mb-2" to="/feature"><i className="fa fa-angle-right mr-2" />Gym Features</Link>
          <Link className="text-white mb-2" to="/blog"><i className="fa fa-angle-right mr-2" />Blogs</Link>
          </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-primary mb-4">Popular Links</h4>
        <div className="d-flex flex-column justify-content-start">
          <Link className="text-white mb-2" to="/login"><i className="fa fa-angle-right mr-2" />Member Login</Link>
          <Link className="text-white mb-2" to="/register2"><i className="fa fa-angle-right mr-2" />Register</Link>
          <Link className="text-white mb-2" to="/service"><i className="fa fa-angle-right mr-2" />Services</Link>
          <Link className="text-white mb-2" to="/blog"><i className="fa fa-angle-right mr-2" />Blogs</Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-primary mb-4">Opening Hours</h4>
        <h5 className="text-white">Monday - Friday</h5>
        <p>8.00 AM - 8.00 PM</p>
        <h5 className="text-white">Saturday - Sunday</h5>
        <p>2.00 PM - 8.00 PM</p>
      </div>
    </div>
    <div className="container border-top border-dark pt-5">
      <p className="m-0 text-center text-white">
        © <a className="text-white font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed by
        <a className="text-white font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
      </p>
    </div>
  </div>

  <a href="#" className="btn btn-outline-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
</div>


    </>
  )
}

export default Footer