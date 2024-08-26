import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import {Box} from '@mui/material';

export default function hero() {
  return (
    <Box>
         <Container>
          <Row>
            <Col lg={12}>
              <Box className='heroContent'>
                <h2> Unlimited movies, TV shows and more</h2>
                <h5> Watch anywhere. Cancel anytime.</h5>
                <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
                <Box>
                  <input type="text" placeholder='Email Address' />
                  <button><Link to="/register">Get Started </Link> </button>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
    </Box>
  )
}
