import React from 'react';
import nofound from '../assets/images/404.png';
import { Container } from 'react-bootstrap';

export default function notFound() {
  return (
    <Container className="notfound">
      <img src={nofound} alt="not found" className='img-fluid' />
    </Container>
  )
}
