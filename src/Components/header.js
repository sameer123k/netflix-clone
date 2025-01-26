import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/images/logo1.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (

        <Container>
            <Row className="align-items-center">
                <Col xs={4}>
                    <div>
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                </Col>
                <Col xs={8}>
                    <div className='Navbar'>
                        <select>
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                        <Link to="/Login">Sign in</Link>
                    </div>
                </Col>
            </Row>
        </Container>

    );
}
