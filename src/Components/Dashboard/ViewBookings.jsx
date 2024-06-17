import React from 'react'

const ViewBookings = () => {
  return (
    <>
<div className="col-md-7" style={{backgroundColor:"black"}}>
              <div className="card-body p-4">
                <h6 className='text-white'>Information</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6 className='text-white'>Email</h6>
                    <p className="text-white">info@example.com</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6 className='text-white'>Phone</h6>
                    <p className="text-white">123 456 789</p>
                  </div>
                </div>
                <h6 className='text-white'>Projects</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6 className='text-white'>Recent</h6>
                    <p className="text-white">Lorem ipsum</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6 className='text-white'>Most Viewed</h6>
                    <p className="text-white">Dolor sit amet</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <a href="#!"><i className="fab fa-facebook-f fa-lg me-3" /></a>
                  <a href="#!"><i className="fab fa-twitter fa-lg me-3" /></a>
                  <a href="#!"><i className="fab fa-instagram fa-lg" /></a>
                </div>
              </div>
            </div>

    </>
  )
}

export default ViewBookings