import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/AuthSlice'

const initialValue = {
  name: "",
  email: "",
  password: "",
  phone: "",
  answer: "",
}

const Register = () => {
  const { redirectReg } = useSelector((state) => state?.auth);
  const [user, setUser] = useState(initialValue);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const validation = () => {
    let error = {}
    if (!user.name) {
      error.name = "Name is Required"
    }
    if (!user.email) {
      error.email = "Email is Required"
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
    ) {
      error.email = "Enter a valid Email"
    }
    if (!user.phone) {
      error.phone = "Phone No. is Required"
    }
    if (!user.password) {
      error.password = "Password is Required"
    }
    if (!user.answer) {
      error.answer = "Answer is Required"
    }
    return error
  }

  let name, value
  const postUserData = (e) => {
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })


    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "@Name is Required" })
        setUser({ ...user, name: "" })
      } else {
        setError({ ...error, name: "" })
        setUser({ ...user, name: value })
      }
    }
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is required" })
        setUser({ ...user, email: "" })
      } else {
        setError({ ...error, email: "" })
        setUser({ ...user, email: value })
      }
    }
    if (name === "phone") {
      if (value.length === 0) {
        setError({ ...error, phone: "@phone is Required" })
        setUser({ ...user, phone: "" })
      } else {
        setError({ ...error, phone: "" })
        setUser({ ...user, phone: value })
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "@password is Required" })
        setUser({ ...user, password: "" })
      } else {
        setError({ ...error, password: "" })
        setUser({ ...user, password: value })
      }
    }
    if (name === "answer") {
      if (value.length === 0) {
        setError({ ...error, answer: "@answer is Required" })
        setUser({ ...user, answer: "" })
      } else {
        setError({ ...error, answer: "" })
        setUser({ ...user, answer: value })
      }
    }
  }

  const SubmitInfo = async (e) => {
    e.preventDefault()
    let ErrorList = validation()
    setError(validation())
    let formData = new FormData();
    if (Object.keys(ErrorList).length === 0) {
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("phone", user.phone);
      formData.append("password", user.password);
      formData.append("answer", user.answer);
      formData.append("image", user.image);
      dispatch(registerUser(formData))
        .then(() => {
          localStorage.setItem("name", user.name);
          localStorage.setItem("email", user.email);
          localStorage.setItem("phone", user.phone);
          localStorage.setItem("answer", user.answer);
        });
    }
  }
  let e = localStorage.getItem("name")
  console.log(e,"name")
  const redirectUser = () => {
    let name = localStorage.getItem("name")
    let isInLoginPage = window.location.pathname.toLowerCase() === "/register";
    if (name !== null && name !== undefined && name !== "") {
      isInLoginPage && navigate("/login");
    }
  }

  useEffect(() => {
    console.log("Redirecting user...");
    redirectUser();
  }, [redirectReg]);

  return (
    <>
      <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: 400 }}>
          <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Contact Us</h4>
          <div className="d-inline-flex">
            <p className="m-0 text-white"><a className="text-white" href>Home</a></p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Contact Us</p>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img className="img-fluid mb-4 mb-lg-0" src="img/about.jpg" alt="Image" />
          </div>
          <div className="col-md-6 ">
            <div className="contact-form">
              <h2 className="display-4 font-weight-bold mb-2">Register Today</h2>
              <h4 className='mb-4'>Start Your Journey Today</h4>
              <div id="success" />
              <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={SubmitInfo}>
                <div className="control-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                    value={user.name}
                    onChange={e => postUserData(e)}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input type="email" name="email" className="form-control" id="email" placeholder="Your Email"
                    value={user.email}
                    onChange={e => postUserData(e)}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input type="text" name="phone" className="form-control" id="phone" placeholder="Your Contact No."
                    value={user.phone}
                    onChange={e => postUserData(e)}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input type="password" name="password" className="form-control" id="password" placeholder="Your Password"
                    value={user.password}
                    onChange={e => postUserData(e)}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input type="text" name="answer" className="form-control" id="answer" placeholder="Your Answer"
                    value={user.answer}
                    onChange={e => postUserData(e)}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input type="file" name="image" id="image" />
                  <p className="help-block text-danger" />
                </div>
                <div>
                  <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Register</button>
                </div>
                <div className="mt-2">
                  <Link to="/login" style={{ textDecoration: "none" }}>Already have an account? <b className='text-dark'>Login Here</b></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Register