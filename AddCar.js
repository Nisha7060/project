// src/components/AddCar.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const AddCar = ({ onCarAdded }) => {
    const [carName, setCarName] = useState('');
    const [manufacturingYear, setManufacturingYear] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCarAdded({ carName, manufacturingYear, price });
        setCarName('');
        setManufacturingYear('');
        setPrice('');
    };

    return (
        <Container className="mt-5 d-flex justify-content-center">
        <Row className="w-100">
            <Col md={6} lg={4} className="mx-auto">
                <Card className="shadow p-4">
                    <Card.Body>
                        <h3 className="text-center mb-4">Add New Car</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="carName" className="mb-3">
                                <Form.Label>Car Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={carName}
                                    onChange={(e) => setCarName(e.target.value)}
                                    required
                                    placeholder="Enter car name"
                                />
                            </Form.Group>
                            <Form.Group controlId="manufacturingYear" className="mb-3">
                                <Form.Label>Manufacturing Year</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={manufacturingYear}
                                    onChange={(e) => setManufacturingYear(e.target.value)}
                                    required
                                    placeholder="Enter manufacturing year"
                                />
                            </Form.Group>
                            <Form.Group controlId="price" className="mb-4">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                    placeholder="Enter price"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">
                                Add Car
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
};

export default AddCar;
