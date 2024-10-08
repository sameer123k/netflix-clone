import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import {Box} from '@mui/material';
export default function footer() {
  return (
    <Box className='footer'>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3} lg={3} xl={3} >

            <ul>
              <li><a href="#">Faq</a></li>
              <li><a href="#">Investor Relations2</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Speed Test</a></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} xl={3} >
            <ul>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Cookie Preferences</a></li>
              <li><a href="#">Legal Notices</a></li>
            </ul></Col>
          <Col xs={12} sm={6} md={3} lg={3} xl={3} >

            <ul>
              <li><a href="#">Account</a></li>
              <li><a href="#">Ways to Watch</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Only on Netflix</a></li>
            </ul></Col>
          <Col xs={12} sm={6} md={3} lg={3} xl={3} >

            <ul>
              <li><a href="#">Media Centre</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul></Col>
        </Row>

        <Row>
          <p className="footerCopy"> Designed by <Link to="https://infracode.in/">InfraCode</Link> </p>
        </Row>
      </Container>
    </Box>
  )
}