import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ListDate, SignInMeCita } from '../components';

const Paciente = () => {
    return (
        <div>
            <Row className='my-2'>
                <Col lg="7"><ListDate /></Col>
                <Col><SignInMeCita /></Col>
            </Row>
        </div>
    );
};

export default Paciente;