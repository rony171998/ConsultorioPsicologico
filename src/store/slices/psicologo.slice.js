import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const psicologoSlice = createSlice({
    
    name: 'psicologo',
    initialState: [],
    reducers: {
        setPsicologo: (state, action) => {
            return action.payload
        }
    }
})
export const { setPsicologo  } = psicologoSlice.actions;

export const getPsicologos = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('psicologo')
        .then(res => dispatch(setPsicologo(res.data.psicologos)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getPsicologo = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    
    return axios.get(`/psicologo/ ${id}`)
        .then(res =>dispatch(setPsicologo(res.data)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const login = (email, password) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('/psicologo/login', { email, password })
        .then(res => {
            dispatch(setPsicologo(res.data));
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('psicologo', JSON.stringify(res.data.psicologo));
        })
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const registerPsicologo = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('/psicologo/', data )
        .then(res => dispatch(setPsicologo(res.data)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const updatePsicologo = (id, data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.put(`/psicologo/${id}`, data)
        .then(res => dispatch(setPsicologo(res.data)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const deletePsicologo = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`/psicologo/${id}`)
        .then(res => dispatch(setPsicologo(res.data)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const logout = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('/psicologo/logout')
        .then(res => {
            dispatch(setPsicologo(res.data));
            localStorage.removeItem('token');
            localStorage.removeItem('psicologo');
        })
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const selectPsicologo = (state) => state.psicologo;

export default psicologoSlice.reducer;