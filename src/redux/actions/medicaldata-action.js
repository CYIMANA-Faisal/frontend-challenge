import { GET_MEDICAL_DATA } from './../types/action-types'
import axios from 'axios';

export const getMedicalDataAction = () => async dispatch => {
    console.log(process.env.REACT_APP_NODE_API_URL)
    const payload = await axios.get(`${process.env.REACT_APP_NODE_API_URL}/medical`)
    console.log(payload)
    dispatch( {
       type: GET_MEDICAL_DATA,
       payload,
    });
};