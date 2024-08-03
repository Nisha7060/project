// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { username, password, role });
            const { token } = response.data;
            localStorage.setItem('token', token);
            onLogin({ username, role });
            navigate(role === 'admin' ? '/admin' : '/user');
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    return (
        // <div>
        //     <h2>Login - Assignment for Quadiro Technologies</h2>
        //     <form onSubmit={handleSubmit}>
        //         <label>Username:</label>
        //         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        //         <label>Password:</label>
        //         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        //         <label>Role:</label>
        //         <select value={role} onChange={(e) => setRole(e.target.value)}>
        //             <option value="user">User</option>
        //             <option value="admin">Admin</option>
        //         </select>
        //         <button type="submit">Login</button>
        //     </form>
        // </div>

        <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-100">
            <Col md={6} lg={4} className="mx-auto">
                <Card className="shadow p-4" >
                    <Card.Body>
                        <h2 className="text-center mb-4 ">Quadiro Technologies</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="username" className="mb-3">
                                <Form.Label className="mb-2">Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="password" className="mb-3">
                                <Form.Label className="mb-2">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="role" className="mb-4">
                                <Form.Label className="mb-2">Role</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" 
                             type="submit" 
                             className="w-100">
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
};

export default Login;
