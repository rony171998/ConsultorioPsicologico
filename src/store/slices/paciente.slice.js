import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { swal, ToastSigned } from "../../components/swal";
import { setIsLoading } from "./isLoading.slice";

if (process.env.NODE_ENV === "development") {
    axios.defaults.baseURL = "http://localhost:4000/api/v1";
} else {
    axios.defaults.baseURL =
        "https://consultorio-psicologico.azurewebsites.net/api/v1";
}

export const pacienteSlice = createSlice({
    name: "paciente",
    initialState: [],
    reducers: {
        setPaciente: (state, action) => {
            return action.payload;
        },
    },
});
export const { setPaciente } = pacienteSlice.actions;

export const getPacientes = () => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .get(`/paciente`)
        .then(res => dispatch(setPaciente(res.data.pacientes)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
};

export const getPaciente = id => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .get(`/paciente ${id}`)
        .then(res => dispatch(setPaciente(res.data)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
};

export const login = data => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
        .post("/paciente/login", data)
        .then((res) => localStorage.setItem("token", res.data.token), ToastSigned())   
        .catch(err => dispatch(console.log(err) , swal("error", err.response.data.message, "error")))
        .finally(() => dispatch(setIsLoading(false)));
};

export const registerPaciente = data => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .post("/paciente/", data)
        .then(res => swal("Registro exitoso", res.statusText, "success"))
        .catch(err => dispatch(console.log(err) , swal("error", err.response.data.message, "error")))
        .finally(() => dispatch(setIsLoading(false)));
};

export const updatePaciente = (id, data) => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .put(`/paciente/${id}`, data)
        .then(res => swal("success", res.statusText, "success"))
        .catch(err => swal("error", err.response.data.message, "error"))
        .finally(() => dispatch(setIsLoading(false)));
};

export const deletePaciente = id => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .delete(`/paciente/${id}`)
        .then(res => swal("success", res.statusText, "success"))
        .catch(err => swal("error", err.response.data.message, "error"))
        .finally(() => dispatch(setIsLoading(false)));
};

export const logout = () => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .post("/paciente/logout")
        .then(res => {
            dispatch(setPaciente(res.data));
            localStorage.removeItem("token");
        })
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
};

export default pacienteSlice.reducer;
