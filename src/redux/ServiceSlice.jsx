import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/AxiosInstance";


export const FetchServiceData= createAsyncThunk('fetchserviceData', async()=>{
    try{
        const res=await axiosInstance.get('getservice')
        return res?.data
    }catch(error){
        console.log(error);
    }
})

const initialState={
    service_data:[],
    status:"success"
}

export const ServiceSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
    },
    extraReducers: (builder) => { 
        builder
            .addCase(FetchServiceData.pending, (state) => {
                state.status = "loading...";
                state.service_data = null;
            })
            .addCase(FetchServiceData.fulfilled, (state, { payload }) => {
                state.status = 'success';
                state.service_data = payload;
            })
            .addCase(FetchServiceData.rejected, (state) => {
                state.status = 'try again';
            });
    }
})