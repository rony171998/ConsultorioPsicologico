import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ListDate, SignInCita } from '../components';

const Paciente = () => {
    return (
        <div>
            <Row className='my-2'>
                <Col lg="7"><ListDate /></Col>
                <Col><SignInCita /></Col>
            </Row>
        </div>
    );
};

export default Paciente;