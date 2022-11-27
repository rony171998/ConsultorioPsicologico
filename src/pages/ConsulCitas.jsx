import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableDates from "../components/atoms/TableDates";
import { getCitas } from "../store/slices/cita.slice";

const ConsultarCitas = () => {
    const dispatch = useDispatch();
    let dates = useSelector(state => state.cita);

    useEffect(() => {
        dispatch(getCitas());
    }, [dispatch]);

    return (
        <div>
            <TableDates dates={dates} />
        </div>
    );
};

export default ConsultarCitas;
