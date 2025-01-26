import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function hero() {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <div className='heroContent'>
            <h2> Unlimited movies, TV shows and more</h2>
            <h5> Watch anywhere. Cancel anytime.</h5>
            <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
            <div>
              <input type="text" placeholder='Email Address' />
              <button><Link to="/register">Get Started </Link> </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
