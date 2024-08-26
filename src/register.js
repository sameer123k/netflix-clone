import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Components/footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import logo from './images/logo1.png';
import Header from './Components/header2';
import {Box} from '@mui/material';

export default function register() {
  return (
    <Box>
      <Box className='Header'>
        <Header />
      </Box>


      <Box className="loginForm">
        <Form>
          <h2> Sign up </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="date" placeholder="DOB" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <button className="signIn"><Link to="/Dashboard"> Sign Up </Link> </button>
          </Form.Group>


          <Form.Group className="mb-3" controlId="">
            <p> Already have an account? <strong> <Link to="/login">Login</Link> </strong>   </p>
          </Form.Group>

        </Form>
      </Box>

    </Box>


  )
}
