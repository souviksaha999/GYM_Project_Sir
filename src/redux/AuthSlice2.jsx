import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import axiosInstance from "../api/AxiosInstance";


const initialState= {
    UserData:{},
    loading:false,
    redirectReg: null,
    LogoutToggle: false,
    redirectTo:null
 }

export const register=createAsyncThunk("signup",async(data)=>{
    const response=await axiosInstance.post("register", data,{
       headers: {
         'Content-Type': 'multipart/form-data',
       },
     });
     toast(response?.data?.message);
       localStorage.setItem("name",response?.data?.savedMember?.name);
     return response;
 })

 
export const login=createAsyncThunk("login",async(data)=>{
    try{
        const response=await axiosInstance.post("login", data);
        return response;
    }catch(error){
        toast(error?.response?.data?.message)
        // toast("error")
    }
 })


 export const AuthSlice2=createSlice({
    name:"member",
    initialState,
    reducers:{
        RegLog: (state, { payload }) => {
            localStorage.removeItem("name")
            state.LogoutToggle = false
        },
        LogoutUser:(state,{payload})=>{
            localStorage.removeItem("token")
            localStorage.removeItem("name")
            localStorage.removeItem("email")
            localStorage.removeItem("phone")
            localStorage.removeItem("answer")
            localStorage.removeItem("image")
            localStorage.removeItem("_id")
            toast.success("Loggedout Successfully")
            state.LogoutToggle = false
        }, 

        check_token: (state, { payload }) => {
            let token = localStorage.getItem("token");
            if (token !== null && token !== undefined) {
                state.LogoutToggle = true;
            }
          },
          redirectToo: (state, { payload }) => {
            state.redirectTo = payload
          },
    },
    extraReducers:{
       [register.pending]:(state)=>{
          state.loading=true
       },
       [register.fulfilled]:(state,action)=>{
             localStorage.setItem("name", action?.payload?.data?.savedMember?.name)
             toast(action?.payload?.message);
       },
       [register.rejected]: (state,action) => {
          state.loading = false
          toast("Email Already Exists!");
      },


      [login.pending]:(state)=>{
        state.loading=true
     },
     [login.fulfilled]:(state,{payload})=>{
        if(payload?.status===200){

            localStorage.setItem("token",payload?.data?.token)
            localStorage.setItem("_id", payload?.data?.data?._id)
            localStorage.setItem("name", payload?.data?.data?.name)
            localStorage.setItem("email", payload?.data?.data?.email)
            localStorage.setItem("phone", payload?.data?.data?.phone)
            localStorage.setItem("answer", payload?.data?.data?.answer)
            localStorage.setItem("image", payload?.data?.data?.image)
            state.LogoutToggle = true
            state.redirectTo="/"
            toast(payload?.data?.message);
        }
     },
     [login.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error('Login Error:', action.payload); // Log the error to the console
        toast("Wrong Email or Password!");
    }
    
    }
 })



 export const { RegLog,LogoutUser,check_token,redirectToo } = AuthSlice2.actions