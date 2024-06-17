import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { FetchServiceDetailsData } from '../../redux/ServiceDetailsSlice';
import { imgUrl } from '../../api/imageUrl';

const TrainingDetails = () => {
  const { serviceDetails_data } = useSelector((state) => state?.serviceDetails);
  const dispatch = useDispatch();
  const { id } = useParams()

  useEffect(() => {
    dispatch(FetchServiceDetailsData(id))
  }, [id])

  console.log("serviceDetails", serviceDetails_data);


  return (
    <>
      <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: 400 }}>
          <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Detail Page</h4>
          <div className="d-inline-flex">
            <p className="m-0 text-white"><a className="text-white" href>Home</a></p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Detail</p>
          </div>
        </div>
      </div>

      {/* *****details page****** */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center mb-4">
              <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{ width: 100, height: 100 }}>
                <span>01</span>
                <strong className="text-uppercase m-0 text-white">Jan</strong>
                <span>2045</span>
              </div>
              <div className="pl-3">
                <h1 className="font-weight-bold mb-3">{serviceDetails_data?.data?.service_name}</h1>
                {/* <div className="d-flex">
                  <span className="mr-2 text-muted"><i className="fa fa-user"/> Admin</span>
                </div> */}
              </div>
            </div>
            <img className="w-50 float-left mr-4 mb-3" src={`${imgUrl}/${serviceDetails_data?.data?.image}`} alt="Image" />
            <p><b>{serviceDetails_data?.data?.service_description}</b></p>
            
            <Link to={`/joining/${serviceDetails_data?.data?._id}`} className='btn btn-lg btn-danger px-4 py-2'>Join Now</Link>
          </div>


        </div>
      </div>

    </>
  )
}

export default TrainingDetails