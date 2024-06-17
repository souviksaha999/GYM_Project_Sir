import React from 'react'
import GymType from '../Components/Home/GymType'
import Category from '../Components/Home/Category'

const Services = () => {
  return (
    <>
    <div className="container-fluid page-header mb-5">
  <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{minHeight: 400}}>
    <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Gym Services</h4>
    <div className="d-inline-flex">
      <p className="m-0 text-white"><a className="text-white" href>Home</a></p>
      <p className="m-0 text-white px-2">/</p>
      <p className="m-0 text-white">Trainings</p>
    </div>
  </div>
</div>

<div class="container gym-class mb-5" style={{marginTop:"60px"}}>
<Category/>
</div>


    </>
  )
}

export default Services