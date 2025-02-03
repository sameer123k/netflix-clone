import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../assets/images/logo1.png';
import profile from '../assets/images/profile.png';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Movie from '../assets/images/movie1.jpg';
import Movie2 from '../assets/images/movie2.jpg';
import Movie3 from '../assets/images/movie3.jpg';
import Movie4 from '../assets/images/movie4.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function dashboardheader() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="bg-black">
      <Container className='py-3' >
        <Row className='align-items-center'>
          <Col xl="6" xs={12}>
            <div className="topLeft" >
              <Navbar expand="lg">
                <Container fluid>
                  <Link to="/dashboard" > <img src={Logo} alt="logo" height={30} /></Link>
                  <Navbar.Toggle aria-controls="navbarScroll" className='bg-light' />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                    >
                      <Nav.Link href="" className='active'>Home</Nav.Link>
                      <Nav.Link href="">Series</Nav.Link>
                      <Nav.Link href="">Movies</Nav.Link>
                      <Nav.Link href="">New and Popular</Nav.Link>
                      <Nav.Link href="">My List</Nav.Link>

                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </Col>
          <Col xl="6" xs={12}>
            <div className="topRight">
              <input type="search" placeholder='Search...' />

              <svg xmlns="http://www.w3.org/2000/svg" onClick={handleShow} width="16" height="16" fill="currentColor" class="bi bi-bell cursor-pointer" viewdiv="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
              </svg>

              <Offcanvas show={show} onHide={handleClose} backdrop="static">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Notifications</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='dashboard_Details'>
                  <div className='sidebarVideos'>
                    <div>  <img src={Movie} alt="movie" className='img-fluid rounded' /></div>
                    <div>
                      <Link to="../../DashboardDetails" > <h5> Pathaan Official Trailer | Shahrukh Khan </h5></Link>
                      <div>
                        <small>Netflix India <i class="bi bi-check-circle-fill"></i></small>
                      </div>
                      <small> 37 Mins Ago </small>
                    </div>
                  </div>
                  <div className='sidebarVideos'>
                    <div>  <img src={Movie2} alt="movie" className='img-fluid rounded' /></div>
                    <div>
                      <Link to="../../DashboardDetails" > <h5> Pathaan Official Trailer | Shahrukh Khan </h5> </Link>
                      <div>
                        <small>Netflix India <i class="bi bi-check-circle-fill"></i></small>
                      </div>
                      <small> 52 Mins Ago </small>
                    </div>
                  </div>
                  <div className='sidebarVideos'>
                    <div>  <img src={Movie3} alt="movie" className='img-fluid rounded' /></div>
                    <div>
                      <Link to="../../DashboardDetails" >    <h5> Pathaan Official Trailer | Shahrukh Khan </h5> </Link>
                      <div>
                        <small>Netflix India <i class="bi bi-check-circle-fill"></i></small>
                      </div>
                      <small> 2 Hrs Ago </small>
                    </div>
                  </div>
                  <div className='sidebarVideos'>
                    <div>  <img src={Movie4} alt="movie" className='img-fluid rounded' /></div>
                    <div>
                      <Link to="../../DashboardDetails" >   <h5> Pathaan Official Trailer | Shahrukh Khan </h5> </Link>
                      <div>
                        <small>Netflix India <i class="bi bi-check-circle-fill"></i></small>
                      </div>
                      <small> 9 Hrs Ago </small>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>

              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <img src={profile} alt="profile" height={30} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/Profile"><i class="bi bi-person-circle pe-1"></i> Profile Setting</Dropdown.Item>
                  <Dropdown.Item href="/Downloads"><i class="bi bi-download pe-1"></i> Downloads</Dropdown.Item>
                  <Dropdown.Item href="/HelpCenter"><i class="bi bi-headset pe-1"></i> Help Center </Dropdown.Item>
                  <Dropdown.Item href="/"><i class="bi bi-box-arrow-left"></i> Logout </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>


            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
