import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./slices/isLoading.slice";
import paciente from "./slices/paciente.slice";
import cita from "./slices/cita.slice";
import psicologo from "./slices/psicologo.slice";
import valoracion from "./slices/valoracion.slice";
import empleadoapi from "./api/empleadoapi";

export default configureStore({
  reducer: {
    isLoading,
    paciente,
    psicologo,
    cita,
    valoracion,
    [empleadoapi.reducerPath]: empleadoapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(empleadoapi.middleware )
});
