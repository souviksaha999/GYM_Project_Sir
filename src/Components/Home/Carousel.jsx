import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchBannerData } from '../../redux/BannerSlice';
import { imgUrl } from '../../api/imageUrl';
import CarouselSkeleton from './CarouselSkeleton';

const Carousel = () => {
  const { banner_data } = useSelector((state) => state?.banner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchBannerData());
  }, []);

  console.log('banner', banner_data);

  return (
    <>
      <div className="container-fluid p-0 ">
        {banner_data ? (
          <div id="blog-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {banner_data?.data?.map((bItem, index) => {
                if (bItem.status === '1') {
                  return (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <img className="w-100" src={`${imgUrl}/${bItem.image}`} alt="Image" />
                      <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h3 className="text-white text-capitalize m-0">{bItem.subtitle}</h3>
                        <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">
                          {bItem.title}
                        </h2>
                        <Link
                          to="/service"
                          className="btn btn-lg btn-outline-danger mt-3 mt-md-5 py-md-3 px-md-5"
                        >
                          Join Us Now
                        </Link>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
              <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
              <span className="carousel-control-next-icon" />
            </a>
          </div>
        ) : (
          // Use CarouselSkeleton when data is loading
          <CarouselSkeleton />
        )}
      </div>
    </>
  );
};

export default Carousel;
