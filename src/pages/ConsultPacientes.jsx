import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TablePacientes from "../components/atoms/TablePacientes";
import { getPacientes } from "../store/slices/paciente.slice";

const ConsultarPacientes = () => {
    const dispatch = useDispatch();
    let pacientes = useSelector(state => state.paciente);

    useEffect(() => {
        dispatch(getPacientes());
    }, [dispatch]);
    
    return (
        <div>
            <TablePacientes dates={pacientes} />
        </div>
    );
};

export default ConsultarPacientes;
