import React, { useEffect, useState } from "react";
import TablePsicologos from "../components/moleculas/TablePsicologos";

const ConsultarPsicologos = () => {
    const [psicologos, setPsicologos] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:4000/api/v1/psicologo")
            .then(res => res.json())
            .then(data => setPsicologos(data.psicologos))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <TablePsicologos dates={psicologos} />
        </div>
    );
};

export default ConsultarPsicologos;
