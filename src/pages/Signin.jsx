import React from 'react';
import { SignInPaciente, SignInPsicologo } from '../components';

const Paciente = ({ rol }) => {
    return (
        <div>
            <section className="text-center">
                <div className="p-5 bg-image d-block" style={{
                    backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
                    height: "200px"
                }}></div>

                <div className="card mx-4 mx-md-5 mb-3 shadow-5-strong" style={{
                    marginTop: "-100px",
                    background: "hsla(0, 0%, 100%, 0.8)",
                    backdropFilter: "blur(30px)"
                }}>
                    <div className="card-body py-5 px-md-5">

                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-5">Sign up {rol}</h2>
                                {rol === 'paciente' ? <SignInPaciente /> : <SignInPsicologo />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Paciente;