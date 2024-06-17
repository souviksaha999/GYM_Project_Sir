import React from 'react'
import HomeAbout from '../Components/Home/HomeAbout'
import Trainer from '../Components/Home/Trainer'

const About = () => {
    return (
        <>
            <div className="container-fluid page-header mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: 400 }}>
                    <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">About Us</h4>
                    <div className="d-inline-flex">
                        <p className="m-0 text-white"><a className="text-white" href>Home</a></p>
                        <p className="m-0 text-white px-2">/</p>
                        <p className="m-0 text-white">About Us</p>
                    </div>
                </div>
            </div>

            <HomeAbout />

            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-4 p-0">
                        <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: 300 }}>
                            <i className="flaticon-training display-3 text-primary mr-3" />
                            <div className>
                                <h2 className="text-white mb-3">Progression</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="d-flex align-items-center bg-primary text-white px-5" style={{ minHeight: 300 }}>
                            <i className="flaticon-weightlifting display-3 text-secondary mr-3" />
                            <div className>
                                <h2 className="text-white mb-3">Workout</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: 300 }}>
                            <i className="flaticon-treadmill display-3 text-primary mr-3" />
                            <div className>
                                <h2 className="text-white mb-3">Nutrition</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Trainer />

        </>
    )
}

export default About