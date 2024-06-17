import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchTestimonialData } from '../../redux/TestimonialSlice';
import { imgUrl } from '../../api/imageUrl';
import TestimonialSkeleton from './TestimonialSkeleton';

const Testimonial = () => {
  const { testimonial_data } = useSelector((state) => state?.testimonial);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchTestimonialData());
  }, []);

  console.log("testimonial", testimonial_data);

  return (
    <>
      <div className="container-fluid position-relative testimonial my-5">
        <div className="container">
          <div className="row px-3 align-items-center">
            <div className="col-md-6 bg-secondary">
              <div className="d-flex align-items-center px-3" style={{ minHeight: 450 }}>
                <div id="carouselId" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselId" data-slide-to={0} className="active" />
                    <li data-target="#carouselId" data-slide-to={1} />
                    <li data-target="#carouselId" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    {testimonial_data ? (
                      testimonial_data?.data?.map((tItem, index) => {
                        if (tItem.status === '1') {
                          return (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                              <div className="d-flex align-items-center mb-4 text-white">
                                <img
                                  width={100}
                                  height={100}
                                  className="rounded-circle bg-dark p-2"
                                  src={`${imgUrl}/${tItem.image}`}
                                  alt="Image"
                                />
                                <div className="pl-4">
                                  <h4 className="text-primary">{tItem.client_name}</h4>
                                  <p className="m-0">{tItem?.service_details[0]?.service_name}</p>
                                </div>
                              </div>
                              <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                {tItem.review}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })
                    ) : (
                      <TestimonialSkeleton />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pl-md-3 d-none d-md-block">
                <h4 className="text-primary">Testimonial</h4>
                <h4 className="display-4 mb-4 text-white font-weight-bold">What Our Clients Say?</h4>
                <p className="m-0 text-white">
                  Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed. Lorem sea
                  lorem vero. Sanct dolor clita clita rebum kasd magna erat diam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
