import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";
import { swal, ToastSigned } from "../../components/swal";

if (process.env.NODE_ENV === "development") {
    axios.defaults.baseURL = "http://localhost:4000/api/v1";
} else {
    axios.defaults.baseURL =
        "https://consultorio-psicologico.azurewebsites.net/api/v1";
}

export const psicologoSlice = createSlice({
    name: "psicologo",
    initialState: [],
    reducers: {
        setPsicologo: (state, action) => {
            return action.payload;
        },
    },
});
export const { setPsicologo } = psicologoSlice.actions;

export const getPsicologos = () => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .get("psicologo")
        .then(res => dispatch(setPsicologo(res.data.psicologos)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
};

export const getPsicologo = id => dispatch => {
    dispatch(setIsLoading(true));

    return axios
        .get(`/psicologo/ ${id}`)
        .then(res => dispatch(setPsicologo(res.data)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
};

export const login = data => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .post("/psicologo/login", data)
        .then(res => localStorage.setItem("token", res.data.token), ToastSigned())
        .catch(err =>
            dispatch(
                console.log(err),
                swal("error", err.response.data.message, "error")
            )
        )
        .finally(() => dispatch(setIsLoading(false)));
};

export const registerPsicologo = data => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .post("/psicologo/", data)
        .then(res => swal("success", res.statusText, "success"))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
};

export const updatePsicologo = (id, data) => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .put(`/psicologo/${id}`, data)
        .then(res => dispatch(setPsicologo(res.data)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
};

export const deletePsicologo = id => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .delete(`/psicologo/${id}`)
        .then(res => dispatch(setPsicologo(res.data)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
};

export const logout = () => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .post("/psicologo/logout")
        .then(res => {
            dispatch(setPsicologo(res.data));
            localStorage.removeItem("token");
            localStorage.removeItem("psicologo");
        })
        .catch(err => console.log(err))
        .finally(() => dispatch(setIsLoading(false)));
};

export default psicologoSlice.reducer;
