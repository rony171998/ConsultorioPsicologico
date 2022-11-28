import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TablePsicologos from "../components/atoms/TablePsicologos";
import { getPsicologos } from "../store/slices/psicologo.slice";

const ConsultarPsicologos = () => {
    const dispatch = useDispatch();
    let psicologos = useSelector(state => state.psicologo);
    
    useEffect(() => {
        dispatch(getPsicologos());
    }, [dispatch]);

    return (
        <div>
            <TablePsicologos dates={psicologos} />
        </div>
    );
};

export default ConsultarPsicologos;
