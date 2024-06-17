import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../api/AxiosInstance";

export const FetchBlogDetailsData = createAsyncThunk('fetchblogDetailsData', async (id) => {
    try {
        const res = await axiosInstance.get(`getblogdetails/${id}`);
        return res?.data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    blogDetails_data: {},
    status: "success",
};

export const FetchBlogDetailsSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {},
    extraReducers: {
        [FetchBlogDetailsData.pending]: (state) => {
            state.status = "loading...";
            state.blogDetails_data = null;
        },
        [FetchBlogDetailsData.fulfilled]: (state, action) => {
            state.status = "success";
            state.blogDetails_data = action.payload;
        },
        [FetchBlogDetailsData.rejected]: (state) => {
            state.status = "try again";
        },
    },
});

