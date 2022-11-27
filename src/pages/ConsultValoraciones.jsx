import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableValoraciones from "../components/atoms/TableValoraciones";
import { getValoraciones } from "../store/slices/valoracion.slice";

const ConsultarValoraciones = () => {
    const dispatch = useDispatch();
    let valoraciones = useSelector((state) => state.valoracion);

    useEffect(() => {
        dispatch(getValoraciones());
    }, [dispatch]);

    return (
        <div>
            <TableValoraciones dates={valoraciones} />
        </div>
    );
};

export default ConsultarValoraciones;
