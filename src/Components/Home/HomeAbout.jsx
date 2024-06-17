import React from 'react'
import { Link } from 'react-router-dom'

const HomeAbout = () => {
  return (
    <>
<div className="container py-5">
  <div className="row align-items-center">
    <div className="col-lg-6">
      <img className="img-fluid mb-4 mb-lg-0" src="img/about.jpg" alt="Image" />
    </div>
    <div className="col-lg-6">
      <h2 className="display-4 font-weight-bold mb-4">10 Years Experience</h2>
      <p>Transform your physique and elevate your fitness journey at our state-of-the-art gym, where dedication meets results, and every workout brings you closer to your peak performance. Unleash your potential in a motivating environment designed to inspire and sculpt the best version of you.</p>
      <div className="row py-2">
        <div className="col-sm-6">
          <i className="flaticon-barbell display-2 text-primary" />
          <h4 className="font-weight-bold">Certified GYM Center</h4>
          <p>Empower your fitness from anywhere with our virtual gym, where workouts transcend boundaries, and health knows no limits</p>
        </div>
        <div className="col-sm-6">
          <i className="flaticon-medal display-2 text-primary" />
          <h4 className="font-weight-bold">Award Winning</h4>
          <p>Join our online gym community – where fitness meets flexibility, and your wellness journey is just a click away</p>
        </div>
      </div>
      {/* <Link to="/about" className="btn btn-lg px-4 btn-outline-primary">Learn More</Link> */}
    </div>
  </div>
</div>


    </>
  )
}

export default HomeAbout