import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../api/AxiosInstance";

export const FetchBannerData= createAsyncThunk('fetchBannerData', async()=>{
    try{
        // const res=await axios.get('http://localhost:7700/getbanner')
        const res=await axiosInstance.get('getbanner')
        return res?.data
    }catch(error){
        console.log(error);
    }
})

const initialState={
    banner_data:[],
    status:"success"
}

export const BannerSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
    },
    extraReducers: (builder) => { 
        builder
            .addCase(FetchBannerData.pending, (state) => {
                state.status = "loading...";
                state.banner_data = null;
            })
            .addCase(FetchBannerData.fulfilled, (state, { payload }) => {
                state.status = 'success';
                state.banner_data = payload;
            })
            .addCase(FetchBannerData.rejected, (state) => {
                state.status = 'try again';
            });
    }

})