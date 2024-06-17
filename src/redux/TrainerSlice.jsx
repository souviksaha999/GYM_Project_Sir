import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../api/AxiosInstance";


export const FetchTrainerData= createAsyncThunk('fetchtrainerData', async()=>{
    try{
        const res=await axiosInstance.get('gettrainer')
        return res?.data
    }catch(error){
        console.log(error);
    }
})

const initialState={
    trainer_data:[],
    status:"success"
}

export const TrainerSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
    },
    extraReducers: (builder) => { 
        builder
            .addCase(FetchTrainerData.pending, (state) => {
                state.status = "loading...";
                state.trainer_data = null;
            })
            .addCase(FetchTrainerData.fulfilled, (state, { payload }) => {
                state.status = 'success';
                state.trainer_data = payload;
            })
            .addCase(FetchTrainerData.rejected, (state) => {
                state.status = 'try again';
            });
    }
})