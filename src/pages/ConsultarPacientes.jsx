import React, { useEffect, useState } from "react";
import TablePacientes from "../components/moleculas/TablePacientes";

const ConsultarPacientes = () => {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/api/v1/paciente")
            .then(res => res.json())
            .then(data => setPacientes(data.pacientes))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <TablePacientes dates={pacientes} />
        </div>
    );
};

export default ConsultarPacientes;
