import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CarouselSkeleton = () => {
  return (
    <div className="container-fluid p-0 ">
      <div id="blog-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {[1, 2, 3].map((index) => (
            <div key={index} className={`carousel-item ${index === 1 ? 'active' : ''}`}>
              <Skeleton height={880} width="100%" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h3 className="text-white text-capitalize">
                  <Skeleton height={20} width={100} />
                </h3>
                <h2 className="display-2 m-0 text-white font-weight-bold text-capitalize">
                  <Skeleton height={20} width={800} />
                </h2>
                <Skeleton height={45} width={200} />
              </div>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    </div>
  );
};

export default CarouselSkeleton;
