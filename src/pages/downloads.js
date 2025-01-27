import React from 'react';
import Header from '../Components/dashboardheader';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import bgImg from '../assets/images/bg.avif';
import Footer from '../Components/footer';
import Avengers from '../assets/images/avenger.jfif';
import Pathan from '../assets/images/pathaan.jfif';
import Sooryavanshi from '../assets/images/sooryavanshi.jfif';
import Dreamgirl from '../assets/images/dreamgirl.jfif';
import Singham from '../assets/images/singham.jfif';
import Pushpa2 from '../assets/images/pushpa2.jfif';

export default function downloads() {
    return (
        <Container fluid className='p-0'>
            {/* header */}
            <Header />

            <Container>
                <Row className='downloads'>
                    <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                        <div class="card">
                            <img src={Avengers} alt="Image" />
                            <div class="card-body">
                                <h5 class="card-title">Avengers</h5>
                                <p class="card-text">Special Edition</p>
                                <button class="btn btn-warning"><i class="fa-solid fa-download"></i> Resume </button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                        <div class="card">
                            <img src={Pathan} alt="pathaan" />
                            <div class="card-body">
                                <h5 class="card-title">Pathaan</h5>
                                <p class="card-text">Shahrukh Khan</p>
                                <button class="btn btn-success"><i class="fa-solid fa-download"></i> Downloaded </button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                        <div class="card">
                            <img src={Sooryavanshi} alt="Sooryavanshi" />
                            <div class="card-body">
                                <h5 class="card-title">Sooryavanshi</h5>
                                <p class="card-text">Akshay Kumar, Ajay Devgan</p>
                                <button class="btn btn-success"><i class="fa-solid fa-download"></i> Downloaded </button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                        <div class="card">
                            <img src={Dreamgirl} alt="dreamgirl" />
                            <div class="card-body">
                                <h5 class="card-title">Dream Girl</h5>
                                <p class="card-text">Aayushman Khurana</p>
                                <button class="btn btn-danger"><i class="fa-solid fa-download"></i> Soon </button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                        <div class="card">
                            <img src={Singham} alt="Singham" />
                            <div class="card-body">
                                <h5 class="card-title">Singham Returns</h5>
                                <p class="card-text">Ajay Devgan</p>
                                <button class="btn btn-danger"><i class="fa-solid fa-download"></i> Soon </button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                        <div class="card">
                            <img src={Pushpa2} alt="pushpa2" />
                            <div class="card-body">
                                <h5 class="card-title">Pushpa 2</h5>
                                <p class="card-text">Allu Arjun</p>
                                <button class="btn btn-danger"><i class="fa-solid fa-download"></i> Soon </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* footer  */}
            <Footer />
        </Container>



    );
}
