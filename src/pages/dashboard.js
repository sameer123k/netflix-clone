import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Components/dashboardheader';
import '../css/style.css';
import Footer from '../Components/footer';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Orange from '../assets/images/orange.jpg';
import Blacklist from '../assets/images/blacklist.webp';
import Hotdog from '../assets/images/hotdog.webp';
import Peaky from '../assets/images/peaky.jpg';
import BigBang from '../assets/images/bigbang.webp';

export default function dashboard() {
    return (
        // header 
        <Container fluid className='p-0'>

            <Header />

            <div className="hero-Section">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <main>
                                <section class="banner">
                                    <div class="banner-content">
                                        <h1>Popular on Netflix</h1>
                                        <p>Watch the latest movies and TV shows.</p>
                                        <Button><Link to="/DashboardDetails">Watch Now  </Link></Button>
                                    </div>
                                </section>
                            </main>
                        </Col>
                        <Col xl={12}>
                            <div class="media-set-wrapper">
                                <div class="media-set-container">

                                    <div class="media-set">
                                        <div class="media-item">
                                            <img src={Orange} alt="movie image" />
                                        </div>
                                        <div class="media-item">
                                            <img src={Blacklist} />
                                        </div>
                                        <div class="media-item">
                                            <img src={Hotdog} />
                                        </div>
                                        <div class="media-item">
                                            <img src={Peaky} />
                                        </div>
                                        <div class="media-item">
                                            <img src={BigBang} />
                                        </div>
                                        <div class="media-item">
                                            <img src={Orange} alt="movie" />
                                        </div>
                                        <div class="media-item">
                                            <img src={Blacklist} />
                                        </div>
                                        <div class="media-item">
                                            <img src={Hotdog} />
                                        </div>
                                        <div class="media-item">
                                            <img src={Peaky} />
                                        </div>
                                        <div class="media-item">
                                            <img src={BigBang} />
                                        </div>
                                        <div class="media-item">
                                            <img src={Hotdog} />
                                        </div>
                                        <div class="media-item">
                                            <img src={Peaky} />
                                        </div>
                                        <div class="media-item">
                                            <img src={BigBang} />
                                        </div>
                                        <div class="media-item">
                                            <img src={Orange} alt="movie" />
                                        </div>
                                        <div class="media-item">
                                            <img src={Blacklist} />
                                        </div>
                                        <div class="media-item">
                                            <img src={Hotdog} />
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


            <Footer />

        </Container>

    )
}
