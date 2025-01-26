import React from 'react';
import DashboardHeader from '../Components/dashboardheader';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import avatarImg from '../assets/images/avatar.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from '../Components/footer';

export default function profilesetting() {
    return (
        <Container fluid className='profile-setting p-0'>
            {/* header  */}
            <DashboardHeader />

            <Container className='py-5'>
                <Row className='align-items-center'>
                    <Col xl={4}>
                        <div className='card'>
                            <div className='card-header text-center'>
                                <img src={avatarImg} alt='avatar image' />
                            </div>
                            <div className='card-body text-center'>
                                <h6> Sameer Khan </h6>
                                <Row className='align-items-center pt-2'>
                                    <Col>
                                        <label>Email  </label>
                                        <p> Abc123@gmail.com </p>
                                    </Col>
                                    <Col>
                                        <label>Contact</label>
                                        <p> 9876543210 </p>
                                    </Col>
                                    <Col>
                                        <label> Address </label>
                                        <p> Jaipur, Rajasthan </p>
                                    </Col>
                                    <Col>
                                        <label> PinCode </label>
                                        <p> 302012 </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xl={8}>
                        <Form>
                            <Container>
                                <Row>
                                    <Col xl={6} lg={6} md={6} xs={12}>
                                        <Form.Group className="mb-3" controlId="name">
                                            <Form.Label>First Name </Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} xs={12}>
                                        <Form.Group className="mb-3" controlId="name">
                                            <Form.Label>Last Name </Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} xs={12}>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} xs={12}>
                                        <Form.Group className="mb-3" controlId="contact">
                                            <Form.Label>Contact</Form.Label>
                                            <Form.Control type="tel" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} xs={12}>
                                        <Form.Group className="mb-3" controlId="address">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} xs={12}>
                                        <Form.Group className="mb-3" controlId="pincode">
                                            <Form.Label>PinCode</Form.Label>
                                            <Form.Control type="number" maxLength={6} placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} xs={12}>
                                        <Button className='btn btn-danger'>Update </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                    </Col>
                </Row>
            </Container>

            {/* footer  */}
            <Footer />

        </Container>
    );
}
