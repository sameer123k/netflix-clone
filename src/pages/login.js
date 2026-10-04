import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Components/footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo1.png';
import Header from '../Components/header2';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const [loginData, setFormData] = useState({
    email: '',
    password: ''
  });

  const datahandle = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const loginnow = async (e) => {
    e.preventDefault();
    const loginNow = await axios.post('http://localhost:3000/api/login', loginData);
    if (loginNow.data.status === 1) {
      alert(loginNow.data.message);
    }
    else if (loginNow.data.status === 2) {
      alert(loginNow.data.message);
    }
    else if (loginNow.data.status === 0) {
      alert(loginNow.data.message);
      navigate('/Dashboard');

    }
  }

  return (
    <>

      <Container className='Header'>
        <Header />
      </Container>


      <Container fluid className="loginForm">
        <Form>
          <h2> Sign in </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" id="email" name="email" onChange={datahandle} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" id="password" name="password" onChange={datahandle} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <button className="signIn" onClick={loginnow}> Sign In </button>
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <small>Forgot Password?</small>
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <p> New to Flixable ? <strong> <Link to="/register">Sign up now</Link> </strong>   </p>
          </Form.Group>

        </Form>
      </Container>

    </>


  )
}
