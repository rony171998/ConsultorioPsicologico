import React from 'react';
import { SignInPaciente, SignInPsicologo } from '../components';

const Paciente = ({rol}) => {
    return (
        <div>
            {rol === 'paciente' ? <SignInPaciente /> : <SignInPsicologo />}                      
        </div>
    );
};

export default Paciente;