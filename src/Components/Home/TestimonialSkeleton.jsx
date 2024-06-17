import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TestimonialSkeleton = () => {
  return (
    <>
      <div className="container-fluid position-relative testimonial my-5">
        <div className="container">
          <div className="row px-3 align-items-center">
            <div className="col-md-6 bg-secondary">
              <div className="d-flex align-items-center px-3" style={{ minHeight: 200 }}>
                <div id="carouselId" className="carousel slide" data-ride="carousel">
                  
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="d-flex align-items-center mb-4 text-white">
                        <Skeleton circle width={90} height={90} />
                        <div className="pl-2">
                          <h4 className="text-primary mr-3">
                            <Skeleton width={150} />
                          </h4>
                          <p className="m-0">
                            <Skeleton width={200} />
                          </p>
                        </div>
                      </div>
                      <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                        <Skeleton count={3} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSkeleton;
