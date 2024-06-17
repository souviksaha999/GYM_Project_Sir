import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBlogData } from '../redux/BlogSlice';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { imgUrl } from '../api/imageUrl';
import BlogPagesSkeleton from './BlogSkeleton';


const BlogPages = () => {
  const { blog_data } = useSelector((state) => state?.blog);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(2);

  useEffect(() => {
    dispatch(FetchBlogData());
  }, [dispatch]);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  const filteredBlogData = blog_data?.data?.filter((blogItem) => blogItem.status === '1');

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = filteredBlogData?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: 400 }}>
          <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Our Blog</h4>
          <div className="d-inline-flex">
            <p className="m-0 text-white"><a className="text-white" href="/">Home</a></p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Our Blog</p>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="d-flex flex-column text-center mb-5">
          <h4 className="text-primary font-weight-bold">Our Blog</h4>
          <h4 className="display-4 font-weight-bold">Your Ultimate Fitness Guide Book</h4>
        </div>
        {blog_data ? (
          <div className="row">
            {currentPosts?.map((blogItem, index) => (
              <div key={index} className="col-lg-6 mb-5 blog-item">
                <img className="img-fluid mb-4" src={`${imgUrl}/${blogItem.image}`} alt="Image" />
                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{ width: 80, height: 80 }}>
                    <small>Burn</small>
                    <strong className="text-uppercase m-0 text-white"> Build</strong>
                    <small>Boost</small>
                  </div>
                  <div className="pl-3">
                    <h3 className="font-weight-bold">{blogItem.title}</h3>
                    <p style={{ fontSize: "18px" }}><b>{blogItem.subtitle}</b></p>
                  </div>
                </div>
                <p>{blogItem.content.slice(0, 100)}....</p>
                <Link to={`/getblogdetails/${blogItem._id}`} className="btn btn-outline-primary mt-2 px-3"  >Read More <i className="fa fa-angle-right" /></Link>
              </div>
            ))}
          </div>
        ) : (
          <BlogPagesSkeleton />
        )}
        <div className="col-lg-12 my-4 pb-3">
          <nav aria-label="Page navigation">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageCount={Math.ceil(filteredBlogData?.length / postPerPage)}
              previousLabel="< previous"
              activeClassName={'active'}
              containerClassName={'pagination justify-content-center mb-4'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              breakClassName={'page-item disabled'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link pointer'}
            />
          </nav>
        </div>
      </div>
    </>
  );
};

export default BlogPages;
