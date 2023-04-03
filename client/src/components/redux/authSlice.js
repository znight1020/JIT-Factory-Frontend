import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: "",
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
