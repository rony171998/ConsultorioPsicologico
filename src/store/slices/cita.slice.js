import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { swal } from '../../components/swal';
import { setIsLoading } from './isLoading.slice';

if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = process.env.NODE_SERVER_ENDPOINT_LOCAL;
} else {
    axios.defaults.baseURL = process.env.NODE_SERVER_ENDPOINT;  
}

export const citaSlice = createSlice({
    name: 'cita',
    initialState: [],
    reducers: {
        setCita: (state, action) => {
            return action.payload
        }
    }
})
export const { setCita  } = citaSlice.actions;        

const getConfig = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const getCitas = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`/cita`)
        .then(res =>dispatch(setCita(res.data.citas)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getMyCitas = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`/cita/me`, getConfig())
        .then(res =>dispatch(setCita(res.data.citas)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getMyCitasPsicologo = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`/cita/me/psicologo`, getConfig())
        .then(res =>dispatch(setCita(res.data.citas)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const createMeCita = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('/cita/me', data , getConfig())
        .then(res => {
            swal( "success" , res.statusText , "success")
            dispatch(getCitas());
        })
        .catch(err => swal( "error" , err.response.statusText , "error"))
        .finally(() => dispatch(setIsLoading(false)));              
}

export const createCita = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('/cita', data)
        .then(res => {
            swal( "success" , res.statusText , "success")
            dispatch(getCitas());
        })
        .catch(err => swal( "error" , err.response.statusText , "error"))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));              
}

export default citaSlice.reducer;