import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../api/AxiosInstance";


export const FetchTestimonialData= createAsyncThunk('fetchtestimonialData', async()=>{
    try{
        const res=await axiosInstance.get('gettestimonial')
        return res?.data
    }catch(error){
        console.log(error);
    }
})

const initialState={
    testimonial_data:[],
    status:"success"
}

export const TestimonialSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
    },
    extraReducers: (builder) => { 
        builder
            .addCase(FetchTestimonialData.pending, (state) => {
                state.status = "loading...";
                state.testimonial_data = null;
            })
            .addCase(FetchTestimonialData.fulfilled, (state, { payload }) => {
                state.status = 'success';
                state.testimonial_data = payload;
            })
            .addCase(FetchTestimonialData.rejected, (state) => {
                state.status = 'try again';
            });
    }
})