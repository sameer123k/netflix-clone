import React from 'react';
import '../css/style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import logo from "../assets/images/logo1.png";
import Header from '../Components/header';
import Footer from "../Components/footer";
import Hero from '../Components/hero';
import Enjoy from '../Components/enjoy';
import Accordion from '../Components/accordion';
import { IconName } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";


// link import 
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <Container fluid className="p-0">


      <div className='Header'>
        <Header />
      </div>


      <div className='heroSection'>
        <Hero />
      </div>


      <div className='enjoyTv'>
        <Enjoy />
      </div>


      <div className="Accordion">
        <Accordion />
      </div>


      <div className="Footer">
        <Footer />
      </div>


    </Container >
  );
}
