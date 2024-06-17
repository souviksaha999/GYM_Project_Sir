import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const BlogPagesSkeleton = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          {[1, 2].map((index) => (
            <div key={index} className="col-lg-6 mb-5 blog-item">
              <Skeleton height={300} />
              <div className="d-flex align-items-center mb-4 mt-3">
                <div className="d-flex flex-column align-items-center justify-content-center rounded-circle text-white" style={{ width: 80, height: 80 }}>
                  <Skeleton width={80} height={80} style={{ borderRadius: '50%' }} />
                </div>
                <div className="pl-3">
                  <h3 className="font-weight-bold">
                    <Skeleton width={200} />
                  </h3>
                  <p style={{ fontSize: "18px" }}>
                    <b>
                      <Skeleton width={150} />
                    </b>
                  </p>
                </div>
              </div>
              <p>
                <Skeleton count={4} />
              </p>
              <Link to="#" className="btn mt-2 px-3">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Skeleton width={80} height={30} style={{ marginRight: '10px' }} />
                  <Skeleton width={30} height={30} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPagesSkeleton;
