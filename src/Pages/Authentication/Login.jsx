import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/AuthSlice2';
import { toast } from 'react-toastify';

const Login = () => {
    const { redirectTo } = useSelector((state) => state?.auth2);
    const [email, setEmail] = useState();
    const[loading,setLoading] = useState(false)
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await dispatch(login({ email, password }));
            navigate("/service");
        } catch (error) {
            console.error('Login failed:', error);
            toast.error('Login failed');
        }

        setLoading(false);
    }


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

            <div className="container gym-class mb-5 pb-5" style={{ marginTop: "100px" }}>
                <div className="row px-5">
                    <div className="col-md-6 p-0">
                        <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                            <i className="flaticon-six-pack" />
                            <h3 className="display-4 mb-3 text-white font-weight-bold">Connect With Us To Achieve Ultimate Fitness Goal</h3>
                            <p>
                            CoreFit Gym offers a transformative fitness experience with expert guidance and a supportive community to help you achieve your fitness goals efficiently.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                            <i className="flaticon-bodybuilding" />
                            <h3 className="display-4 mb-3 text-white font-weight-bold">Login Now To Become Our Member</h3>
                            <form className="form-inline justify-content-start mb-4" onSubmit={(e) => handleSubmit(e)}>
                                <div className="input-group">
                                    <input type="email" className="form-control-lg mb-2" name="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                                    <input type="password" className="form-control-lg" name="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                {loading ? (
                    <div className="mt-2 d-flex align-items-center">
                        <div className="loading-box mr-2">
                            <span>Loading...</span>
                        </div>
                        <div className="spinner-border spinner-border-sm text-light" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="mt-2">
                        <button className="btn btn-md btn-outline-light px-4 mr-5">Login Here</button>
                    </div>
                )}
                            </form>
                            <Link to="/register2" className="pt-2" style={{ textDecoration: "none" }}>Don't have an account? <b className='text-white'>Register Here</b></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login



{/*  */ }