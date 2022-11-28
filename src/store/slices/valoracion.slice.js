import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { swal } from '../../components/swal';
import { setIsLoading } from './isLoading.slice';

export const valoracionSlice = createSlice({
    name: 'valoracion',
    initialState: [],
    reducers: {
        setValoracion: (state, action) => {
            return action.payload
        }
    }
})
export const { setValoracion  } = valoracionSlice.actions;        

const getConfig = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const getValoraciones = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`/valoracion`)
        .then(res =>dispatch(setValoracion(res.data.valoraciones)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getMyValoraciones = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`/valoracion/me`, getConfig())
        .then(res =>dispatch(setValoracion(res.data.valoraciones)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const createMeValoracion = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('/valoracion/me', data , getConfig())
        .then(res => {
            swal( "success" , res.statusText , "success")
            dispatch(getValoraciones());
        })
        .catch(err => swal( "error" , err.response.statusText , "error"))
        .finally(() => dispatch(setIsLoading(false)));              
}

export const createValoracion = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('/valoracion', data , getConfig())
        .then(res => {
            swal( "success" , res.statusText , "success")
            dispatch(getValoraciones());
        })
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));              
}

export default valoracionSlice.reducer;