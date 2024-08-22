import React from 'react'
import './Components/style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import logo from "./images/logo1.png";
import frame from "./images/frame.png";
import Accordion from 'react-bootstrap/Accordion';
import Footer from "./Components/footer";

import { IconName } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";

// link import 
import {Link} from 'react-router-dom';

function submitFunction(){
 console.log("click event run Successfully");
}


export default function Home() {
  return (
    <div>

      {/* header  */}
      <div className='Header'>
        <Container>
          <Row className="align-items-center">
            <Col>
              <div>
                <img src={logo} alt="logo" className="logo" />
              </div>
            </Col>
            <Col>
              <div className='Navbar'>

                <select>
                  <option>English</option>
                  <option>Hindi</option>
                </select>
                {/* <button> Sign in </button> */}

                <Link to="/Login">Sign in</Link>

              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* hero section */}
      <div className='heroSection'>
        <Container>
          <Row>
            <Col lg={12}>
              <div className='heroContent'>
                <h2> Unlimited movies, TV shows and more</h2>
                <h5> Watch anywhere. Cancel anytime.</h5>
                <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
                <div>
                  <input type="text" placeholder='Email Address' />
                  <button onClick={submitFunction}><Link to="/register">Get Started </Link> </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      <div className='enjoyTv'>
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col>
              <div className='content'>
                <h4>Enjoy on your TV </h4>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more. </p>
              </div>
            </Col>
            <Col>
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
      </div>

      <div className='enjoyTv'>
        <Container>
          <Row className='align-items-center justify-content-center'>

            <Col>
              <div>
                <div className='tvFrame'>
                  <img src={frame} alt="frame" />
                  <iframe src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoplay>
                  </iframe>
                </div>
              </div>
            </Col>
            <Col>
              <div className='content'>
                <h4>Enjoy on your TV </h4>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more. </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="Accordion">
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
              <div className='heroContent'>
                <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
                <div>
                  <input type="text" placeholder='Email Address' />
                  <button>Get Started </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </div>


      {/* footer  */}
      <div className="Footer">
        <Footer />
      </div>


    </div >
  );
}
