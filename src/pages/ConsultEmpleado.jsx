import React from "react";
import TableEmpleados from "../components/atoms/TableEmpleados";
import { useGetEmpleadoQuery } from "../store/api/empleadoapi";

const ConsultarEmpleado = () => {
    const { data  } = useGetEmpleadoQuery();
    
    return (
        <div>
            <TableEmpleados dates={data?.empleados} />
        </div>
    );
};

export default ConsultarEmpleado;
