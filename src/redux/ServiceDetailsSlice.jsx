import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../api/AxiosInstance";


export const FetchServiceDetailsData= createAsyncThunk('fetchserviceDetailsData', async(id)=>{
    try{
        const res=await axiosInstance.get(`getservicedetails/${id}`)
        return res?.data
    }catch(error){
        console.log(error);
    }
})

const initialState={
    serviceDetails_data:{},
    status:"success"
}

export const ServiceDetailsSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
    },
    extraReducers: (builder) => { 
        builder
            .addCase(FetchServiceDetailsData.pending, (state) => {
                state.status = "loading...";
                state.serviceDetails_data = null;
            })
            .addCase(FetchServiceDetailsData.fulfilled, (state, { payload }) => {
                state.status = 'success';
                state.serviceDetails_data = payload;
            })
            .addCase(FetchServiceDetailsData.rejected, (state) => {
                state.status = 'try again';
            });
    }
})