// src/components/Login.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import apiAuthentication from '../services/apiAuthentication'
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      apiAuthentication.apiLogin(user, senha); 
      navigate('../components/formulario')
    } catch (error) {
      console.log(error)
    }
    
    
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100vw' }}>
      <Form onSubmit={handleSubmit} className="border p-4 shadow rounded" style={{height:'auto', width: '50vw'}}>
        <h2 className="text-center mb-4">Login</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className='mt-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-5">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
