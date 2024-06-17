import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TrainerSkeleton = () => {
  return (
    <>
      <div className="container pt-5 team">
        <div className="row">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-5">
              <div className="card border-0 text-center text-white">
                <Skeleton height={200} />
                <div className="card-social d-flex align-items-center justify-content-center">
                </div>
                <div className="card-body bg-secondary">
                  <h4 className="card-title text-primary">
                    <a className="text-white"><Skeleton width={160} /></a>
                  </h4>
                  <p className="card-text">
                    <b><Skeleton width={100} /></b>
                  </p>
                  <hr style={{ backgroundColor: 'white' }} />
                  <span className="card-text text-danger">
                    <Skeleton width={180} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrainerSkeleton;
