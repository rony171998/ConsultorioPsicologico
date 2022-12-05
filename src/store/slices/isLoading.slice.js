import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:4000/api/v1';
} else {
  axios.defaults.baseURL = 'http://localhost:4000/api/v1';  
}

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => {
      return action.payload;
    }
  }
});

export const { setIsLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
