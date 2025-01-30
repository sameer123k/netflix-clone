import React from 'react';
import Header from '../Components/dashboardheader';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import PathaanVideo from '../assets/videos/pathaan.mp4';
import Footer from '../Components/footer';
import Movie from '../assets/images/movie2.jpg';
import Movie2 from '../assets/images/movie3.jpg';

export default function dashboardDetails() {
    return (
        <Container fluid className='p-0 dashboard_Details'>
            <Header />

            <Container fluid className='py-3'>
                <Row>
                    <Col xl={8} lg={8} md={8} sm={6} xs={12}>
                        <video height="370" width="100%" controlsList='nodownload' controls >
                            <source src={PathaanVideo} type="video/mp4" />
                        </video>
                        <h5> Pathaan Trailer | Shah Rukh Khan | Deepika Padukone | John Abraham | Siddharth A | YRF Spy Universe </h5>
                        <blockquote>
                            <p>103,747,119 views  Premiered Jan 10, 2023  #yrfspyuniverse #yrfmovies #yashchopra
                                Party Pathaan Ke Ghar Pe Rakhoge, Toh Mehmaan Nawaazi Ke Liye Pathaan Toh Aayega Aur, Pataakhe Bhi Laayega</p>
                            <ul>
                                <li> Like us on Facebook: Facebook/yrf </li>
                                <li> Follow us on X: x.com/yrf </li>
                                <li>  Follow us on Instagram: Instagram/yrf </li>
                                <li>Visit us on: yashrajfilms.com</li>
                            </ul>
                            <p> Indian RAW agent “Pathaan” (Shah Rukh Khan) gets to know of a major impending attack against India, mounted by a mercenary group led by the ruthless enigma Jim (John Abraham), who has a history of his own. </p>
                        </blockquote>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                        <div className='sidebarVideos'>
                            <div>  <img src={Movie} alt="movie" className='img-fluid rounded' /></div>
                            <div>
                                <h5> Pathaan Official Trailer | Shahrukh Khan </h5>
                                <div>
                                    <small>Netflix India <i class="bi bi-check-circle-fill"></i></small>
                                </div>
                                <small>2.22k views |</small>  <small> 3 Months Ago </small>
                            </div>
                        </div>
                        <div className='sidebarVideos'>
                            <div>  <img src={Movie2} alt="movie" className='img-fluid rounded' /></div>
                            <div>
                                <h5> Pathaan Official Trailer | Shahrukh Khan </h5>
                                <div>
                                    <small>Netflix India <i class="bi bi-check-circle-fill"></i></small>
                                </div>
                                <small>18.7k views |</small>  <small> 1 Months Ago </small>
                            </div>
                        </div>
                        <div className='sidebarVideos'>
                            <div>  <img src={Movie} alt="movie" className='img-fluid rounded' /></div>
                            <div>
                                <h5> Pathaan Official Trailer | Shahrukh Khan </h5>
                                <div>
                                    <small>Netflix India <i class="bi bi-check-circle-fill"></i></small>
                                </div>
                                <small>29.8k views |</small>  <small> 2 Months Ago </small>
                            </div>
                        </div>
                        <div className='sidebarVideos'>
                            <div>  <img src={Movie2} alt="movie" className='img-fluid rounded' /></div>
                            <div>
                                <h5> Pathaan Official Trailer | Shahrukh Khan </h5>
                                <div>
                                    <small>Netflix India <i class="bi bi-check-circle-fill"></i></small>
                                </div>
                                <small>79.3k views |</small>  <small> 11 Months Ago </small>
                            </div>
                        </div>
                        <div className='sidebarVideos'>
                            <div>  <img src={Movie} alt="movie" className='img-fluid rounded' /></div>
                            <div>
                                <h5> Pathaan Official Trailer | Shahrukh Khan </h5>
                                <div>
                                    <small>Netflix India <i class="bi bi-check-circle-fill"></i></small>
                                </div>
                                <small>4.2k views |</small>  <small> 2 Years Ago </small>
                            </div>
                        </div>
                        <div className='sidebarVideos'>
                            <div>  <img src={Movie2} alt="movie" className='img-fluid rounded' /></div>
                            <div>
                                <h5> Pathaan Official Trailer | Shahrukh Khan </h5>
                                <div>
                                    <small>Netflix India <i class="bi bi-check-circle-fill"></i></small>
                                </div>
                                <small>33.6k views |</small>  <small> 7 Months Ago </small>
                            </div>
                        </div>
                        <div className='sidebarVideos'>
                            <div>  <img src={Movie} alt="movie" className='img-fluid rounded' /></div>
                            <div>
                                <h5> Pathaan Official Trailer | Shahrukh Khan </h5>
                                <div>
                                    <small>Netflix India <i class="bi bi-check-circle-fill"></i></small>
                                </div>
                                <small>43k views |</small>  <small> 9 Months Ago </small>
                            </div>
                        </div>
                        <div className='sidebarVideos'>
                            <div>  <img src={Movie2} alt="movie" className='img-fluid rounded' /></div>
                            <div>
                                <h5> Pathaan Official Trailer | Shahrukh Khan </h5>
                                <div>
                                    <small>Netflix India <i class="bi bi-check-circle-fill"></i></small>
                                </div>
                                <small>67.6k views |</small>  <small> 12 Months Ago </small>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>


            <Footer />

        </Container>
    )
}
