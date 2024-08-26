import React from 'react';
import './Components/style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import logo from "./images/logo1.png";
import Header from './Components/header';
import Footer from "./Components/footer";
import Hero from './Components/hero';
import Enjoy from './Components/enjoy';
import Accordion from './Components/accordion';
import { IconName } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { Box } from '@mui/material';

// link import 
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <Box>


      <Box className='Header'>
        <Header />
      </Box>


      <Box className='heroSection'>
        <Hero />
      </Box>


      <Box className='enjoyTv'>
        <Enjoy />
      </Box>


      <Box className="Accordion">
        <Accordion />
      </Box>


      <Box className="Footer">
        <Footer />
      </Box>


    </Box >
  );
}
