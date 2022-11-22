import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { swal } from '../../components/swal';
import { setIsLoading } from './isLoading.slice';

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

export default citaSlice.reducer;