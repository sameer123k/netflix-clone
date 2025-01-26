import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import frame from "../assets/images/frame.png";

export default function enjoy() {
    return (
   
            <Container>
                <Row className='align-items-center justify-content-center'>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className='content'>
                            <h4>Enjoy on your TV </h4>
                            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more. </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div>
                            <div className='tvFrame'>
                                <img src={frame} alt="frame" />
                                <iframe src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoplay>
                                </iframe>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
       
    )
}
