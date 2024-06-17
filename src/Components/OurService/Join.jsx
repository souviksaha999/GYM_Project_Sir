import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FetchServiceDetailsData } from '../../redux/ServiceDetailsSlice';
import { booking } from '../../redux/BookingSlice';
import { FetchBookingDetails } from '../../redux/DasboardSlice';

const Join = () => {
  const { serviceDetails_data } = useSelector((state) => state?.serviceDetails);
  console.log(serviceDetails_data?.data?.bookings);

  const { id } = useParams();

  const dispatch = useDispatch();
  const name = localStorage.getItem('name');
  const memberId = localStorage.getItem('_id');
  const email = localStorage.getItem('email');
  const serviceName = serviceDetails_data?.data?.service_name
  console.log(serviceName);
  
  const [scheme, setScheme] = useState();
  // const [service_name, setServiceName] = useState();
  const [price, setPrice] = useState('0');
  const serviceId = id
  console.log(memberId, "price")

  useEffect(() => {
    if (serviceId) {
      switch (scheme) {
        case "Yearly":
          setPrice("12000");
          break;
        case "Half-yearly":
          setPrice("8000");
          break;
        case "Quarterly":
          setPrice("3500");
          break;
        default:
          setPrice("0")
      }
    }
  }, [scheme, price]);

  useEffect(() => {
    dispatch(FetchServiceDetailsData(id));
  }, [id]);


  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(booking({ name, email, scheme, price, serviceId, memberId }));

    dispatch(FetchBookingDetails(memberId));
    // navigate(`/dashboard`);
    navigate(`/dashboard/${memberId}`)
  }
  return (
    <>
      <div className="col-md-6 pb-5">
        <h2 className="display-4 font-weight-bold mb-2">Book Your Service Today</h2>
        <h4 className='mb-4'>Start Your {serviceName} Journey Now</h4>
        <div className="contact-form">
          <div id="success"></div>
          <form name="sentMessage" id="contactForm" noValidate="noValidate" onSubmit={(e) => handleSubmit(e)}>
            <div className="control-group">
              <input type="hidden" value={memberId} readOnly className="form-control" id="name" placeholder="Your Name" />
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <input type="text" value={name} readOnly className="form-control" id="name" placeholder="Your Name" />
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <input type="email" value={email} readOnly className="form-control" id="email" placeholder="Your Email" />
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <input type="hidden" value={serviceDetails_data?.data?._id} name='serviceId' className="form-control" id="training" placeholder="Your Training" />
              <p className="help-block text-danger"></p>
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <input type="text" value={serviceDetails_data?.data?.service_name}
                name='service_name' className="form-control" id="training" placeholder="Your Training" />
              <p className="help-block text-danger"></p>
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <select className="form-control mb-2"
                name="scheme"
                value={scheme}
                onChange={(e) => setScheme(e.target.value)}>
                <option value="" >Select Your Scheme</option>
                <option value="Yearly">Yearly</option>
                <option value="Half-yearly">Half-yearly</option>
                <option value="Quarterly">Quarterly</option>
              </select>
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <input
                type="text"
                name='price'
                value={price}
                className="form-control"
                id="price"
                placeholder="Price"
              />
              <p className="help-block text-danger"></p>
            </div>
            <div>
              <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Join