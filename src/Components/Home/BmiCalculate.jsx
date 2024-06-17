import React from 'react'

const BmiCalculate = () => {
  return (
    <>
<div className="container-fluid position-relative bmi my-5">
  <div className="container">
    <div className="row px-3 align-items-center">
      <div className="col-md-6">
        <div className="pr-md-3 d-none d-md-block">
          <h4 className="text-primary">Body Mass Index </h4>
          <h4 className="display-4 text-white font-weight-bold mb-4">Whate is BMI?</h4>
          <p className="m-0 text-white">Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor clita clita rebum kasd magna erat diam</p>
        </div>
      </div>
      <div className="col-md-6 bg-secondary py-5">
        <div className="py-5 px-3">
          <h1 className="mb-4 text-white">Calculate your BMI</h1>
          <form>
            <div className="form-row">
              <div className="col form-group">
                <input type="text" className="form-control form-control-lg bg-dark text-white" placeholder="Weight (KG)" />
              </div>
              <div className="col form-group">
                <input type="text" className="form-control form-control-lg bg-dark text-white" placeholder="Height (CM)" />
              </div>
            </div>
            <div className="form-row">
              <div className="col form-group">
                <input type="text" className="form-control form-control-lg bg-dark text-white" placeholder="Age" />
              </div>
              <div className="col form-group">
                <select className="custom-select custom-select-lg bg-dark text-muted">
                  <option>Gender</option>
                  <option>Mal</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <input type="button" className="btn btn-lg btn-block btn-dark border-light" defaultValue="Calculate Now" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default BmiCalculate