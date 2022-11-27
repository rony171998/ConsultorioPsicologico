import React,{useEffect} from 'react';
import { Card, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMyCitas } from '../store/slices/cita.slice';

const ListDate = () => {
    const dispatch = useDispatch();
    let dates = useSelector(state => state.cita);

    useEffect(() => {
        dispatch(getMyCitas());
    }, [dispatch]);
    
    return (
        <div>
            <Card className=''>
                <Card.Header>
                    <Card.Title>Mis citas</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Estado</th>
                                <th>Psicologo</th>                               
                            </tr>
                        </thead>
                        <tbody>
                            {dates.map(date => (
                                <tr key={date.id}>
                                    <td>{date.fecha}</td>
                                    <td>{date.hora}</td>
                                    <td>{date.estado}</td>
                                    <td>{date.psicologo.name+ " "+ date.psicologo.apellidos}</td>
                                </tr>
                            ))}                           
                        </tbody>
                    </Table>

                </Card.Body>

            </Card>
        </div>
    );
};

export default ListDate;