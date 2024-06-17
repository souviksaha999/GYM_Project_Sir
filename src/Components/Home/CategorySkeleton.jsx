import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CategorySkeleton = () => {
  return (
    <div className="container pt-5 team mx-auto">
      <div className="row">
        {[1, 2, 3,4,5,6].map((index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-5">
            <div className="card border-0 text-center text-white">
              <Skeleton height={250} />
              <div className="card-body bg-secondary">
                <h3 className="card-title text-primary">
                  <Skeleton width={150} />
                </h3>
                <p className="card-text" >
                <b><Skeleton width={100} /></b>
                </p>
                <Skeleton width={80} height={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySkeleton;
