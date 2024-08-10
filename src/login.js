import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Components/footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import logo from './images/logo1.png';

export default function login() {
  return (
    <div>

      <div className='Header'>
        <Container>
          <Row className="align-items-center">
            <Col>
              <div>
                <Link to="/">
                <img src={logo} alt="logo" className="logo" />
                </Link>
              </div>
            </Col>
            <Col>

            </Col>
          </Row>
        </Container>
      </div>


      <div className="loginForm">
        <Form>
          <h2> Sign in </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <button className="signIn">Sign In </button>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <small> OR </small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <button>Use a Sign-in-code </button>
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <small>Forgot Password?</small>
          </Form.Group>        


          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <p> New to Netflix? <strong> Sign up now </strong>   </p>
          </Form.Group>

        </Form>
      </div>

    </div>


  )
}
