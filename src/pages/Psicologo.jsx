import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { RegisterValoration, SignInPsicologo } from '../components';

const Psicologo = () => {
    return (
        <div>           
            
            <Row className='my-auto'>
                <Col>
                    <Card.Img 
                        className='w-100 h-100'
                        src="./Psicologo.png" alt="" 
                        />

                </Col>
                <Col>
                    <RegisterValoration />
                </Col>
                
            </Row>
        </div>
    );
};

export default Psicologo;