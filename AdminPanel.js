// src/components/AdminPanel.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCar from './AddCar';
import EditCar from './EditCar';
import CarList from './CarList';
import AddUser from './AddUser';
import './AdminPanel.css';

const AdminPanel = () => {
    const [cars, setCars] = useState([]);
    const [showAddCar, setShowAddCar] = useState(false);
    const [showAddUser, setShowAddUser] = useState(false);
    const [editCar, setEditCar] = useState(null);

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

    const handleCarAdded = async (car) => {
        try {
            await axios.post('http://localhost:5000/api/cars', car);
            fetchCars();
            setShowAddCar(false);
        } catch (error) {
            console.error('Error adding car:', error);
        }
    };

    const handleCarUpdated = async (car) => {
        try {
            await axios.put(`http://localhost:5000/api/cars/${car._id}`, car);
            fetchCars();
            setEditCar(null);
        } catch (error) {
            console.error('Error updating car:', error);
        }
    };

    const handleCarDeleted = async (carId) => {
        try {
            await axios.delete(`http://localhost:5000/api/cars/${carId}`);
            fetchCars();
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    };

    return (
        <div className="container">
            <h1>Admin Panel - Car Management System</h1>
            <button className="btn-primary m-5" onClick={() => setShowAddCar(!showAddCar)}>
                {showAddCar ? 'Cancel' : 'Add Car'}
            </button>
            <button className="btn-primary" onClick={() => setShowAddUser(!showAddUser)}>
                {showAddUser ? 'Cancel' : 'Add User'}
            </button>

            {showAddCar && <AddCar onCarAdded={handleCarAdded} />}
            {showAddUser && <AddUser />}

            <CarList 
                cars={cars} 
                onEditCar={setEditCar} 
                onDeleteCar={handleCarDeleted} 
            />

            {editCar && (
                <EditCar 
                    car={editCar} 
                    onUpdateCar={handleCarUpdated} 
                    onCancel={() => setEditCar(null)} 
                />
            )}
        </div>
    );
};

export default AdminPanel;
