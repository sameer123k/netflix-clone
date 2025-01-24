import React from 'react';
import { Box } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Components/dashboardheader';
import '../css/style.css';
import Logo from '../assets/images/logo1.png';
import SliderImg from '../assets/images/hero.jpg';
import Movie from '../assets/images/movie1.jpg';
import Movie2 from '../assets/images/movie2.jpg';
import Movie3 from '../assets/images/movie3.jpg';
import Movie4 from '../assets/images/movie4.jpg';
import Movie5 from '../assets/images/movie5.jpg';
import Footer from '../Components/footer';

export default function dashboard() {
    return (
        // header 
        <Box>

            <div>  <Header /></div>

            <div className="hero-Section">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h4> Award Winning Movies </h4>
                            <Box className="slider">
                                <img src={SliderImg} alt="hero" height={150} />
                                <img src={Movie} alt="hero" height={150} />
                                <img src={Movie2} alt="hero" height={150} />
                                <img src={Movie3} alt="hero" height={150} />
                                <img src={Movie4} alt="hero" height={150} />
                                <img src={Movie5} alt="hero" height={150} />
                                <img src={Movie2} alt="hero" height={150} />
                                <img src={Movie} alt="hero" height={150} />
                            </Box>
                            <h4> Comedies </h4>
                            <Box className="slider">
                                <img src={Movie5} alt="hero" height={150} />
                                <img src={Movie2} alt="hero" height={150} />
                                <img src={Movie} alt="hero" height={150} />
                                <img src={Movie2} alt="hero" height={150} />
                                <img src={Movie3} alt="hero" height={150} />
                                <img src={Movie4} alt="hero" height={150} />
                                <img src={Movie} alt="hero" height={150} />
                                <img src={Movie2} alt="hero" height={150} />

                            </Box>
                            <h4> Best Horror Movie  </h4>
                            <Box className="slider">
                                <img src={Movie2} alt="hero" height={150} />
                                <img src={Movie3} alt="hero" height={150} />
                                <img src={Movie2} alt="hero" height={150} />
                                <img src={Movie5} alt="hero" height={150} />
                                <img src={Movie2} alt="hero" height={150} />
                                <img src={Movie} alt="hero" height={150} />
                                <img src={Movie4} alt="hero" height={150} />
                                <img src={Movie} alt="hero" height={150} />

                            </Box>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Footer />
            </div>
        </Box>

    )
}
