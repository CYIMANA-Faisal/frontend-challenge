import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const API_URL = process.env.REACT_APP_JAVA_API_URL;

const initialState = {
  message:'',
  status: undefined,
  isLoading: false
}

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.message = action.payload.data;
      state.status = parseInt(action.payload.status);
    },
    clearStateForSignUp: (state, action) => {
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

export const signUpAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, data)
    dispatch(signUp({message: response.data, status: 200}));
  } catch (err) {
    dispatch(signUp(err.response));
  }
};

export const clearSignUpState = () => async (dispatch) => {
  dispatch(clearStateForSignUp());
};

export const isLoadingState = () => async (dispatch) => {
  dispatch(setIsLoading());
};

export const isNotLoadingState = () => async (dispatch) => {
  dispatch(setIsNotLoading());
};

export const { signUp, clearStateForSignUp, setIsLoading, setIsNotLoading } = signUpSlice.actions

export default signUpSlice.reducer