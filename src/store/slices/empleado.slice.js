import { createSlice } from '@reduxjs/toolkit';

export const empleadoSlice = createSlice({
    
    name: 'empleado',
    initialState: [],
    reducers: {
        setEmpleado: (state, action) => {
            return action.payload
        },
        getEmpleados: (state, params) => {
            const { payload } = params;
            state = payload;
        },
    }
})
export default empleadoSlice.reducer;

export const { setEmpleado  } = empleadoSlice.actions;        


