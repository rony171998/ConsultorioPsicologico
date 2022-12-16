import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ListDate, SignInMeCita } from '../components';
import { getMyCitas } from '../store/slices/cita.slice';

const Paciente = () => {
    const dispatch = useDispatch();
    let dates = useSelector(state => state.cita);

    useEffect(() => {
        dispatch(getMyCitas());
    }, [dispatch]);
    return (
        <div>
            <Row className='my-2'>
                <Col lg="7"><ListDate dates={dates} /></Col>
                <Col><SignInMeCita /></Col>
            </Row>
        </div>
    );
};

export default Paciente;