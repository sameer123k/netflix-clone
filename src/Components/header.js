import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo1.png';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Header() {
    return (
        <Box>
            <Container>
                <Row className="align-items-center">
                    <Col xs={4}>
                        <Box>
                            <img src={logo} alt="logo" className="logo" />
                        </Box>
                    </Col>
                    <Col xs={8}>
                        <Box className='Navbar'>
                            <select>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                            <Link to="/Login">Sign in</Link>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </Box>
    );
}
