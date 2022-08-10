import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_JAVA_API_URL;

const initialState = {
    message: '',
    status: undefined,
    isLoading: false
}

export const signInSlice = createSlice({
  name: 'signIn',
  initialState: initialState,
  reducers: {
    signIn: (state, action) => {
      state.message = action.payload.message;
      state.status = action.payload.status;
    },
    clearStateForsignIn: (state, action) => {
      state.message = '';
      state.status = undefined;
      state.isLoading = false;
    },
    setIsLoading: (state, action) => {
      state.isLoading = true;
    },
    setIsNotLoading: (state, action) => {
      state.isLoading = false;
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

export const clearSignInState = () => async (dispatch) => {
  dispatch(clearStateForsignIn());
};

export const isLoadingState = () => async (dispatch) => {
  dispatch(setIsLoading());
};

export const isNotLoadingState = () => async (dispatch) => {
  dispatch(setIsNotLoading());
};

export const { signIn, clearStateForsignIn, setIsLoading, setIsNotLoading } = signInSlice.actions

export default signInSlice.reducer