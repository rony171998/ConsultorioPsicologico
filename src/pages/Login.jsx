import React from "react";
import { Card } from "react-bootstrap";
import { FormLogin } from "../components/FormLogin";

const Login = () => {
  return (
    <section className="vh-100">
      <div className="py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="bg-image col-md-8 col-lg-8 d-none d-md-block">
                  <Card.Img
                    src="../ilustracion-vector-plano-consulta-psicologo-divorcio-personaje-dibujos-animados-medico-consulta-.jpg"
                    alt="login form"
                    className="img-fluid h-100"
                    style={{
                      borderRadius: "1rem 0 0 1rem",
                    }}
                  />
                </div>
                <div className="col-md-4 col-lg-4 align-items-center">
                  <FormLogin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
