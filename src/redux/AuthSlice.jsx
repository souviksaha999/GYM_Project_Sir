// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { toast } from "react-toastify";
// import axiosInstance from "../api/AxiosInstance";

// const initialState = {
//     loading: false,
//     user: {},
//     redirectReg: null,
//     imageUrl: "",
// }

// export const registerUser = createAsyncThunk('/signup', async (user) => {
//     try {
//       const res = await axiosInstance.post("register", user);
//       return res?.data;
//     } catch (error) {
//       toast(error?.response?.data?.msg);
//       console.log(error);
//     }
//   });

// export const AuthSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         redirectToRegister: (state, { payload }) => {
//             state.redirectReg = payload;
//         },
//         check_token: (state, { payload }) => {
//             let token = localStorage.getItem("token");
//             if (token !== null && token !== undefined) {
//                 state.LogoutToggle = true;
//             }
//         }
//     },
//     extraReducers: {
//         [registerUser.pending]: (state) => {
//           state.loading = true;
//           state.error = null;
//         },
//         [registerUser.fulfilled]: (state, { payload }) => {
//           if (payload?.success === true) {
//             localStorage.setItem("name", payload.name);
//             localStorage.setItem("email", payload.email);
//             localStorage.setItem("phone", payload.phone);
//             localStorage.setItem("answer", payload.answer);
//             state.imageUrl = payload.image; // Set the image URL in the state
//             state.redirectReg = '/login';
//             toast(`Hi ${payload?.name}, Registered Successfully`);
//           }
//         },
//         [registerUser.rejected]: (state, { payload }) => {
//           state.loading = false;
//           state.error = payload;
//         },
//       },
// });

// export const { redirectToRegister, check_token } = AuthSlice.actions;