import React from 'react';
import { SignInPaciente, SignInPsicologo } from '../components';

const Paciente = () => {
    return (
        <div>
            <SignInPaciente />
            <SignInPsicologo />
        </div>
    );
};

export default Paciente;