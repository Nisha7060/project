import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteCar = ({ carId,onCarDeleted }) => {
    const handleDeleteCar = async (e) => {
        try {
            console.log(`Attempting to delete car with ID: ${carId}`);
            const response = await axios.delete(`http://localhost:5000/api/cars/${carId}`);
            console.log('Delete response:', response);
            onCarDeleted(carId);
        } catch (error) {
            console.error('Error deleting car:', error);
            alert('Failed to delete the car. Please try again later.');
        }
    };

    return (
        <Button variant="danger" size="sm" onClick={handleDeleteCar}>
            Delete
        </Button>
    );
};

export default DeleteCar;
