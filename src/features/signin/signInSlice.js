import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_JAVA_API_URL;

const initialState = {
    message: '',
    status: undefined,
    user: undefined
}

export const signInSlice = createSlice({
  name: 'signIn',
  initialState: initialState,
  reducers: {
    signIn: (state, action) => {
      console.log(JSON.stringify(action.payload.user));
      state.message = action.payload.message;
      state.status = action.payload.status;
      // state.user = action.payload.status;
    }
  }
})

export const signInAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, data);
    localStorage.setItem('accessToken', response.data.body)
    dispatch(signIn(response.data));
  } catch (err) {
    dispatch(signIn(err.response.data));
  }
};

export const { signIn } = signInSlice.actions

export default signInSlice.reducer