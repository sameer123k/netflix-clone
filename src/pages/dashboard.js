import React from 'react';
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
                                        <button>Watch Now</button>
                                    </div>
                                </section>
                            </main>
                        </Col>
                        <Col xl={12}>
                            <Row>
                                <Col xl={3}>  <section class="movie-list">
                                    <h2>Trending Now</h2>
                                    <div class="movies">
                                        <div class="movie">
                                            <img src={Movie} alt="Movie 1" />
                                            <p>Movie Title 1</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie2} alt="Movie 2" />
                                            <p>Movie Title 2</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie3} alt="Movie 3" />
                                            <p>Movie Title 3</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie4} alt="Movie 4" />
                                            <p>Movie Title 4</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie5} alt="Movie 5" />
                                            <p>Movie Title 5</p>
                                        </div>
                                    </div>
                                </section></Col>
                                <Col xl={3}>  <section class="movie-list">
                                    <h2>Trending Now</h2>
                                    <div class="movies">
                                        <div class="movie">
                                            <img src={Movie2} alt="Movie 1" />
                                            <p>Movie Title 1</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie} alt="Movie 2" />
                                            <p>Movie Title 2</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie3} alt="Movie 3" />
                                            <p>Movie Title 3</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie4} alt="Movie 4" />
                                            <p>Movie Title 4</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie5} alt="Movie 5" />
                                            <p>Movie Title 5</p>
                                        </div>
                                    </div>
                                </section></Col>
                                <Col xl={3}>  <section class="movie-list">
                                    <h2>Trending Now</h2>
                                    <div class="movies">
                                        <div class="movie">
                                            <img src={Movie3} alt="Movie 1" />
                                            <p>Movie Title 1</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie2} alt="Movie 2" />
                                            <p>Movie Title 2</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie3} alt="Movie 3" />
                                            <p>Movie Title 3</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie4} alt="Movie 4" />
                                            <p>Movie Title 4</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie5} alt="Movie 5" />
                                            <p>Movie Title 5</p>
                                        </div>
                                    </div>
                                </section></Col>
                                <Col xl={3}>  <section class="movie-list">
                                    <h2>Trending Now</h2>
                                    <div class="movies">
                                        <div class="movie">
                                            <img src={Movie5} alt="Movie 1" />
                                            <p>Movie Title 1</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie2} alt="Movie 2" />
                                            <p>Movie Title 2</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie3} alt="Movie 3" />
                                            <p>Movie Title 3</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie4} alt="Movie 4" />
                                            <p>Movie Title 4</p>
                                        </div>
                                        <div class="movie">
                                            <img src={Movie5} alt="Movie 5" />
                                            <p>Movie Title 5</p>
                                        </div>
                                    </div>
                                </section></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>


            <Footer />

        </Container>

    )
}
