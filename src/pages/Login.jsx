import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FormLogin } from "../components/FormLogin";

const Login = () => {
  return (
    <div className='d-flex' >

      <Row className='mx-auto'>
        <Col>
          <FormLogin />
        </Col>
        <Col>
          <Card.Img
            className='imagee'
            src="./ilustracion-vector-plano-consulta-psicologo-divorcio-personaje-dibujos-animados-medico-consulta-.jpg"
            alt=""
          />
        </Col>
      </Row>

    </div>
  );

};

export default Login;