import React from 'react'
import { Link } from 'react-router-dom'
import Join from '../Components/OurService/Join'

const JoiningForm = () => {

  return (
    <>
      <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: 500 }}>
          <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Become A Member</h4>
          <div className="d-inline-flex">
            <p className="m-0 text-white"><a className="text-white" href>Home</a></p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Services</p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Join Us</p>
          </div>
        </div>
      </div>

      <div className="container gym-class mb-5 pb-5" style={{ marginTop: "100px" }}>
        <div className="row px-5">
          <div className="col-md-6 p-0">
            <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
              <i className="flaticon-six-pack" />
              <h3 className="display-4 mb-3 text-white font-weight-bold">Connect With Us To Achieve Ultimate Fitness Goal</h3>
              <p>
                Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
              </p>
            </div>
          </div>
          <Join />
        </div>
      </div>
    </>
  )
}

export default JoiningForm