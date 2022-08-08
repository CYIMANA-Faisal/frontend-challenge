import axios from 'axios';
export const nodeApi = axios.create({
    baseURL: process.env.REACT_APP_NODE_API_URL,
});