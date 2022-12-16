import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMyCitasPsicologo } from '../store/slices/cita.slice';
import { ListDate, RegisterValoration } from '../components';

const Psicologo = () => {
    const dispatch = useDispatch();
    let dates = useSelector(state => state.cita);

    useEffect(() => {
        dispatch(getMyCitasPsicologo());
    }, [dispatch]);
    return (
        <div>
            <Row>
                <Col><ListDate dates={dates} /></Col>
                <Col><RegisterValoration /></Col>
            </Row>
        </div>
    );
};

export default Psicologo;