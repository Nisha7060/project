// src/components/UserPanel.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarList from './CarList';

const UserPanel = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/cars');
            setCars(response.data);
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    return (
        <div>
            <h2>User Panel - Assignment for Quadiro Technologies</h2>
            <CarList cars={cars} />
        </div>
    );
};

export default UserPanel;
