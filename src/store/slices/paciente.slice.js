import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const pacienteSlice = createSlice({
    
    name: 'paciente',
    initialState: [],
    reducers: {
        setPaciente: (state, action) => {
            return action.payload
        }
    }
})
export const { setPaciente  } = pacienteSlice.actions;

export const getPacientes = () => (dispatch) => {
    dispatch(setIsLoading(true));
    
    return axios.get(`/paciente`)
        .then(res =>dispatch(setPaciente(res.data)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getPaciente = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    
    return axios.get(`/paciente ${id}`)
        .then(res =>dispatch(setPaciente(res.data)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const login = (email, password) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('/paciente/login', { email, password })
        .then(res => {
            dispatch(setPaciente(res.data));
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('paciente', JSON.stringify(res.data.paciente));
        })
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const registerPaciente = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('/paciente/', data )
        .then(res => dispatch(setPaciente(res.data)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const updatePaciente = (id, data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.put(`/paciente/${id}`, data)
        .then(res => dispatch(setPaciente(res.data)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const deletePaciente = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`/paciente/${id}`)
        .then(res => dispatch(setPaciente(res.data)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const logout = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('/paciente/logout')
        .then(res => {
            dispatch(setPaciente(res.data));
            localStorage.removeItem('token');
            localStorage.removeItem('paciente');
        })
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
}

export const selectPaciente = (state) => state.paciente;

export default pacienteSlice.reducer;