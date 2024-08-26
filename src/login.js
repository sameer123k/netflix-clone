import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Components/footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import logo from './images/logo1.png';
import { Box } from '@mui/material';
import Header from './Components/header2';

export default function login() {
  return (
    <Box>

      <Box className='Header'>
        <Header />
      </Box>


      <Box className="loginForm">
        <Form>
          <h2> Sign in </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <button className="signIn"><Link to="/Dashboard"> Sign In  </Link></button>
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <small>Forgot Password?</small>
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <p> New to Netflix? <strong> <Link to="/register">Sign up now</Link> </strong>   </p>
          </Form.Group>

        </Form>
      </Box>

    </Box>


  )
}
