import React from 'react';
import { SignInCita, SignInPaciente } from '../components';

const Paciente = () => {
    return (
        <div>
            <SignInPaciente />
            <SignInCita />
        </div>
    );
};

export default Paciente;