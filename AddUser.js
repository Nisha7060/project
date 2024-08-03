// src/components/AddUser.js
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const AddUser = ({ onUserAdded }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', {
                username,
                password,
                role
            });
            onUserAdded(response.data);
            setUsername('');
            setPassword('');
            setRole('user');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <Container className="mt-5 d-flex justify-content-center">
        <Row className="w-100">
            <Col md={6} lg={4} className="mx-auto">
                <Card className="shadow p-4">
                    <Card.Body>
                        <h3 className="text-center mb-4">Add New User</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="username" className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    placeholder="Enter username"
                                />
                            </Form.Group>
                            <Form.Group controlId="password" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Enter password"
                                />
                            </Form.Group>
                            <Form.Group controlId="role" className="mb-4">
                                <Form.Label>Role</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">
                                Add User
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>

    );
};

export default AddUser;
