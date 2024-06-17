import React, { useEffect } from 'react'
import { FetchBlogDetailsData } from '../../redux/BlogDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { imgUrl } from '../../api/imageUrl';

const BlogDetails = () => {
    const { blogDetails_data } = useSelector((state) => state?.blogDetails);
    const dispatch = useDispatch();
    const { id } = useParams()

    useEffect(() => {
        dispatch(FetchBlogDetailsData(id))
    }, [id])

    console.log("blogDetails", blogDetails_data);

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

            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center mb-4">
                            <div className="pl-3">
                                <h2 className="mb-4 font-weight-bold">{blogDetails_data?.data?.title}</h2>
                                <p style={{ fontSize: "18px" }}><b>{blogDetails_data?.data?.subtitle}</b></p>
                                <img className="w-50 float-right ml-4 mb-3" src={`${imgUrl}/${blogDetails_data?.data?.image}`} alt="Image" />
                                <p>{blogDetails_data?.data?.content}</p>
                                <Link to='/blog' className="btn btn-outline-primary mt-2 px-3"  >Back <i className="fa fa-angle-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails