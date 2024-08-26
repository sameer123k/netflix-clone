import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import frame from "../images/frame.png";
import {Box} from '@mui/material';

export default function enjoy() {
    return (
        <Box>
            <Container>
                <Row className='align-items-center justify-content-center'>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box className='content'>
                            <h4>Enjoy on your TV </h4>
                            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more. </p>
                        </Box>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box>
                            <Box className='tvFrame'>
                                <img src={frame} alt="frame" />
                                <iframe src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoplay>
                                </iframe>
                            </Box>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </Box>
    )
}
