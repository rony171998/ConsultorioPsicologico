import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./slices/isLoading.slice";
import paciente from "./slices/paciente.slice";

export default configureStore({
  reducer: {
    isLoading,
    paciente
  }
});
