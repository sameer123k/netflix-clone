import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Box} from '@mui/material';

export default function accordion() {
    return (
        <Box>
            <Container>
                <Row>
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is Netflix ?</Accordion.Header>
                                <Accordion.Body>
                                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Where can i watch ?</Accordion.Header>
                                <Accordion.Body>
                                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                                    You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How do i cancel ?</Accordion.Header>
                                <Accordion.Body>
                                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>



                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col lg={12}>
                        <Box className='heroContent'>
                            <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
                            <Box>
                                <input type="text" placeholder='Email Address' />
                                <button>Get Started </button>
                            </Box>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </Box>
    )
}
