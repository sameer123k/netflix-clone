import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Components/footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo1.png';
import Header from '../Components/header2';
import axios from 'axios';

export default function Register() {

  const [formData, setformdata] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    dob: ''
  });

  const storeValue = (event) => {
    const { name, value } = event.target;

    setformdata((formData) => ({
      ...formData,      // Copy previous state
      [name]: value     // Overwrite the specific changed field
    }));
  };

  const signup = async () => {
    const dataStoredIs = await axios.post('10.140.255.139:3000/api/addUser/', formData);
    console.log(dataStoredIs);
  }

  return (
    <>
      <Container className='Header'>
        <Header />
      </Container>

      <Container fluid className="loginForm">
        <Form>
          <h2> Sign up </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Full Name" id="name" name="name" onChange={storeValue} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" id="email" name="email" onChange={storeValue} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" id="password" name="password" onChange={storeValue} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirm Password" id="confirmpassword" name="confirmpassword" onChange={storeValue} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="date" placeholder="DOB" id="dob" name="dob" onChange={storeValue} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <button className="signIn" onClick={signup}><Link to="javascript:void(0)"> Sign Up </Link> </button>
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <p> Already have an account? <strong> <Link to="/login">Login</Link> </strong>   </p>
          </Form.Group>

        </Form>
      </Container>

    </>


  )
}
