import { configureStore } from "@reduxjs/toolkit";
import { BannerSlice } from "../BannerSlice";
import { TrainerSlice } from "../TrainerSlice";
import { ServiceSlice } from "../ServiceSlice";
import { TestimonialSlice } from "../TestimonialSlice";
import { AuthSlice } from "../AuthSlice";
import { ServiceDetailsSlice } from "../ServiceDetailsSlice";
import { AuthSlice2 } from "../AuthSlice2";
import { BookingSlice } from "../BookingSlice";
import { FetchBookingDetailsSlice } from "../DasboardSlice";
import { FetchBlogSlice } from "../BlogSlice";
import { FetchBlogDetailsSlice } from "../BlogDetailsSlice";



const Store=configureStore({
    reducer:{
        banner:BannerSlice.reducer,
        trainer:TrainerSlice.reducer,
        service:ServiceSlice.reducer,
        testimonial:TestimonialSlice.reducer,
        serviceDetails:ServiceDetailsSlice.reducer,
        // auth:AuthSlice.reducer
        auth2:AuthSlice2.reducer,
        bookingData:BookingSlice.reducer,
        memberbooking:FetchBookingDetailsSlice.reducer,
        blog:FetchBlogSlice.reducer,
        blogDetails:FetchBlogDetailsSlice.reducer
    }
})

export default Store