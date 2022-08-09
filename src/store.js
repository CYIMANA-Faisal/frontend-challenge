import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from './features/signup/signUpSlice';
import signInReducer from './features/signin/signInSlice';
import medicalDataReducer from './features/medicalData/medicalDataSlice';
export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signInReducer,
    medicalData: medicalDataReducer,
  },
})
