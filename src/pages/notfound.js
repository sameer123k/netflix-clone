import React from 'react';
import { Box } from '@mui/material';
import nofound from '../assets/images/404.png';

export default function notFound() {
  return (
    <Box className="notfound">
      <img src={nofound} alt="not found" className='img-fluid' />
    </Box>
  )
}
