import React from 'react'

const Feature = () => {
  return (
    <>
    <div className="container feature pt-5">
  <div className="d-flex flex-column text-center mb-5">
    <h4 className="text-primary font-weight-bold">Why Choose Us?</h4>
    <h4 className="display-4 font-weight-bold">Benifits of Joining Our GYM</h4>
  </div>
  <div className="row">
    <div className="col-md-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src="img/feature-1.jpg" alt="Image" />
          <i className="flaticon-barbell" />
        </div>
        <div className="col-sm-7">
          <h4 className="font-weight-bold">Videos Instruction</h4>
          <p>Elevate your fitness journey with expert guidance. Access a library of instructional videos led by seasoned trainers, providing valuable insights into effective workouts, proper form, and personalized routines.</p>
        </div>
      </div>
    </div>
    <div className="col-md-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src="img/feature-2.jpg" alt="Image" />
          <i className="flaticon-training" />
        </div>
        <div className="col-sm-7">
          <h4 className="font-weight-bold">Training Calendar</h4>
          <p>Experience a structured approach to your fitness goals. Our detailed training calendar offers a roadmap for your journey, ensuring a well-rounded and progressive workout plan tailored to your aspirations.</p>
        </div>
      </div>
    </div>
    <div className="col-md-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src="img/feature-3.jpg" alt="Image" />
          <i className="flaticon-trends" />
        </div>
        <div className="col-sm-7">
          <h4 className="font-weight-bold">Free Apps &amp; WiFi</h4>
          <p>Stay connected seamlessly with our free apps and WiFi. Utilize cutting-edge fitness apps, track your progress, and enjoy a connected experience while working towards your health and wellness goals.</p>
        </div>
      </div>
    </div>
    <div className="col-md-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src="img/feature-4.jpg" alt="Image" />
          <i className="flaticon-support" />
        </div>
        <div className="col-sm-7">
          <h4 className="font-weight-bold">Community Support</h4>
          <p>Join a vibrant community that shares your passion for fitness. Experience the power of encouragement, and a supportive network that will elevate your motivation and make your fitness journey even more rewarding.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Feature