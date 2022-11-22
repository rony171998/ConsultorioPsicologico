import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ListDate, RegisterValoration } from '../components';

const Psicologo = () => {
    return (
        <div>
            <Row>
                <Col><ListDate /></Col>
                <Col><RegisterValoration /></Col>
            </Row>
        </div>
    );
};

export default Psicologo;