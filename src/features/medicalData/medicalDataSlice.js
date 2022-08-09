import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_NODE_API_URL;


const initialState = {
  message: '',
  status: '',
  data: '',
}

export const medicalDataSlice = createSlice({
  name: 'medicalData',
  initialState: initialState,
  reducer: {
    addMedicalData: (state, action) => {
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.data = action.payload.payload
    }
  }
});

export const getMedicalDataAsync = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axios.get(`${API_URL}/medical?token=${token}`);
    console.log(response.data)
    // dispatch(addMedicalData(response.data));
  } catch (err) {
    console.log(err);
    // dispatch(addMedicalData(err.response));
  }
};

export const { addMedicalData } = medicalDataSlice.actions

export default medicalDataSlice.reducer