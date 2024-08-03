import React from 'react';
import PropTypes from 'prop-types';
import { Table, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarList = ({ cars, onCarUpdated, onCarDeleted }) => {
    //const CarList = ({ cars, onCarUpdated, onCarDeleted }) => {
        console.log('onCarUpdated:', onCarUpdated);
        console.log('onCarDeleted:', onCarDeleted);
        
        // Rest of the component
    
    return (
        <Container className="mt-1">
            <h3 className="text-center mb-4">Car List</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Car Name</th>
                        <th>Manufacturing Year</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => (
                        <tr key={car.id}>
                            <td>{car.carName}</td>
                            <td>{car.manufacturingYear}</td>
                            <td>{car.price}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => onCarUpdated(car)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => onCarDeleted(car.id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

CarList.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        carName: PropTypes.string.isRequired,
        manufacturingYear: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
    })).isRequired,
    onCarUpdated: PropTypes.func.isRequired,
    onCarDeleted: PropTypes.func.isRequired,
};

export default CarList;
