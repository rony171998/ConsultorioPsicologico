import React from 'react';
import { SignInPaciente } from '../components';

export default function SignupPaciente () {
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
                    <div className="card-body py-3 px-md-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-5">Signup Paciente</h2>
                                <SignInPaciente />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
