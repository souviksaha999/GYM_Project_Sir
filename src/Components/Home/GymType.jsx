import React from 'react'
import { Link } from 'react-router-dom'

const GymType = () => {
    return (
        <>
            <div className="container gym-class mb-5">
                <div className="row px-3">
                    <div className="col-md-6 p-0">
                        <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                            <i className="flaticon-six-pack" />
                            <h3 className="display-4 mb-3 text-white font-weight-bold">Body Building</h3>
                            <p>
                                Bodybuilding is a transformative journey that extends beyond the physical realm, encompassing mental fortitude and unwavering dedication. It is a lifestyle that goes beyond mere exercise, evolving into an art form where the body becomes a sculpted masterpiece. Engaging in bodybuilding not only shapes muscles but builds resilience, discipline, and self-confidence.
                            </p>
                            <Link to="/service" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</Link>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                            <i className="flaticon-bodybuilding" />
                            <h3 className="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                            <p>
                                Muscle building is the cornerstone of the bodybuilding journey, a meticulous process that involves targeted workouts, strategic nutrition, and a commitment to pushing physical limits. At its core, muscle building is about sculpting the body to enhance strength, power, and overall athletic performance. It is a holistic approach that combines physical and mental strength.
                            </p>
                            <Link to="/service" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GymType