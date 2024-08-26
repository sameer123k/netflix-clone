import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import logo from '../images/logo1.png';

export default function header2() {
    return (
        <>
            <Box>
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <Box>
                                <Link to="/">
                                    <img src={logo} alt="logo" className="logo" />
                                </Link>
                            </Box>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </Box>
        </>
    )
}
