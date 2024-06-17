import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchTrainerData } from '../../redux/TrainerSlice';
import { imgUrl } from '../../api/imageUrl';
import TrainerSkeleton from './TrainerSkeleton'; // Import the TrainerSkeleton component

const Trainer = () => {
  const { trainer_data } = useSelector((state) => state?.trainer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchTrainerData());
  }, []);

  console.log('trainer', trainer_data);

  return (
    <>
      <div className="container pt-5 team">
        <div className="d-flex flex-column text-center mb-5">
          <h4 className="text-primary font-weight-bold">Our Trainers</h4>
          <h4 className="display-4 font-weight-bold">Meet Our Expert Trainers</h4>
        </div>
        {trainer_data ? (
          <div className="row">
            {trainer_data?.data?.map((tItem, index) => {
              if (tItem.status === '1') {
                return (
                  <div key={index} className="col-lg-3 col-md-6 mb-5">
                    <div className="card border-0 bg-secondary text-center text-white">
                      <img className="card-img-top" src={`${imgUrl}/${tItem.image}`} alt="" />
                      <div className="card-social d-flex align-items-center justify-content-center">
                        {/* Your social media links */}
                      </div>
                      <div className="card-body bg-secondary">
                        <h4 className="card-title text-primary">
                          Trainer Name: <a className="text-white">{tItem.name}</a>
                        </h4>
                        <p className="card-text">
                          Speciality: <b>{tItem.speciality}</b>
                        </p>
                        <hr style={{ backgroundColor: 'white' }} />
                        <span className="card-text text-danger">With {tItem.experience} experience</span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ) : (
          <TrainerSkeleton />
        )}
      </div>
    </>
  );
};

export default Trainer;
