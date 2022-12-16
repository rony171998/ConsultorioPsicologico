import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SignInCita } from "../components";
import { getCitas } from "../store/slices/cita.slice";

const Admin = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCitas());
    }, [dispatch]);

    return (
        <div>
            <SignInCita />
        </div>
    );
};

export default Admin;
