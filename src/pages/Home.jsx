import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Login from './Login';

const Home = () => {
    return (
        <div className='d-flex' >

            <Row className='mx-auto'>
                <Col>
                    <Login />
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

export default Home;