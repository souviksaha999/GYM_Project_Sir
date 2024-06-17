import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { registerUser } from '../../redux/AuthSlice'
import { register } from '../../redux/AuthSlice2'



const Register2 = () => {
    const { redirectReg } = useSelector((state) => state?.auth2);
    const[name,setName]=useState();
      const[email,setEmail]=useState();
      const[phone,setPhone]=useState();
      const[password,setPassword]=useState();
      const[answer,setAnswer]=useState();
      const[image,setImage]=useState("");
      const dispatch = useDispatch();
      let navigate = useNavigate();
      const handleSubmit=(e)=>{
            e.preventDefault();
            dispatch(register({name,email,phone,password,answer,image}));
            navigate("/login");
        }

        const redirectUser = () => {
            let name = localStorage.getItem("name");
            let isInLoginPage = window.location.pathname.toLowerCase() === "/register";
            
            console.log("Name from localStorage:", name);
            console.log("Is in Login Page:", isInLoginPage);
          
            if (name !== null && name !== undefined && name !== "") {
              console.log("Redirecting to /login");
              isInLoginPage && navigate("/login");
            }
          };

          useEffect(() => {
            console.log("redirectReg:", redirectReg);
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
                            <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={(e) => handleSubmit(e)} >
                                <div className="control-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="control-group">
                                    <input type="email" name="email" className="form-control" id="email" placeholder="Your Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="control-group">
                                    <input type="text" name="phone" className="form-control" id="phone" placeholder="Your Contact No."
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="control-group">
                                    <input type="password" name="password" className="form-control" id="password" placeholder="Your Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="control-group">
                                    <input type="text" name="answer" className="form-control" id="answer" placeholder="Your Answer"
                                        onChange={(e) => setAnswer(e.target.value)}
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="control-group">
                                    <input type="file" onChange={(e) => setImage(e.target.files[0])} name="image" accept="image/*" class="form-control" />
                                </div>
                                <p className="help-block text-danger" />
                                <div>
                                    <button className="btn btn-outline-primary" id="sendMessageButton">Register</button>
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

export default Register2