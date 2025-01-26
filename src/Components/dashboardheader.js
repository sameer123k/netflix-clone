import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../assets/images/logo1.png';
import profile from '../assets/images/profile.png';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


export default function dashboardheader() {
  return (
    <div className="bg-black">
      <Container className='py-3'>
        <Row className='align-items-center'>
          <Col xl="6" xs={12}>
            <div className="topLeft">
              <Link to="/Dashboard"> <img src={Logo} alt="logo" height={30} /></Link>
              <ul>
                <li> <Link to="/Dashboard"> Home </Link>  </li>
                <li> <Link to="">Series</Link> </li>
                <li> <Link to="">Movies</Link> </li>
                <li> <Link to="">New and Popular</Link> </li>
                <li> <Link to="">My List</Link> </li>
              </ul>
            </div>
          </Col>
          <Col xl="6" xs={12}>
            <div className="topRight">
              <input type="search" placeholder='Search...' />
              <p className="m-0">KD </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewdiv="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
              </svg>

              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <img src={profile} alt="profile" height={30} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/Profile"><i class="bi bi-person-circle pe-1"></i> Profile Setting</Dropdown.Item>
                  <Dropdown.Item href="/Downloads"><i class="bi bi-download pe-1"></i> Downloads</Dropdown.Item>
                  <Dropdown.Item href="#/action-3"><i class="bi bi-currency-rupee pe-1"></i> My Plans </Dropdown.Item>
                  <Dropdown.Item href="#/action-4"><i class="bi bi-headset pe-1"></i> Help Center </Dropdown.Item>
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
