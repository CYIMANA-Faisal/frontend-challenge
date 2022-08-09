import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_NODE_API_URL;

const initialState = {
    message: '',
    status: undefined,
    data: undefined
}

export const medicalDataSlice = createSlice({
  name: 'medicalData',
  initialState: initialState,
  reducers: {
    medicalData: (state, action) => {
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.data = action.payload.payload;
    },
    clearStateForMedicalData: (state, action) => {
      state.message = '';
      state.status = undefined;
      state.data = undefined;
    }
  }
})

export const medicalDataAsync = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axios.get(`${API_URL}/medical?token=${token}`);
    dispatch(medicalData(response.data));
  } catch (err) {
    dispatch(medicalData(err.response.data));
  }
};

export const clearMedicalDataState = () => async (dispatch) => {
  dispatch(clearStateForMedicalData());
};

export const { medicalData, clearStateForMedicalData } = medicalDataSlice.actions

export default medicalDataSlice.reducer