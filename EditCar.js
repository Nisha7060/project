// src/components/EditCar.js
import React, { useState, useEffect } from 'react';

const EditCar = ({ car, onCarUpdated }) => {
    const [carName, setCarName] = useState(car.carName);
    const [manufacturingYear, setManufacturingYear] = useState(car.manufacturingYear);
    const [price, setPrice] = useState(car.price);

    useEffect(() => {
        setCarName(car.carName);
        setManufacturingYear(car.manufacturingYear);
        setPrice(car.price);
    }, [car]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onCarUpdated({ ...car, carName, manufacturingYear, price });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Car Name:</label>
            <input type="text" value={carName} onChange={(e) => setCarName(e.target.value)} required />
            <label>Manufacturing Year:</label>
            <input type="number" value={manufacturingYear} onChange={(e) => setManufacturingYear(e.target.value)} required />
            <label>Price:</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <button type="submit">Update Car</button>
        </form>
    );
};

export default EditCar;
