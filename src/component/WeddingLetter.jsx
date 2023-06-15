import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './WeddingLetter.css' // Import the CSS file for custom styling
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const WeddingLetter = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md'>
        <Box
          sx={{
            backgroundImage: "url('/background9.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        />
        <Box
          sx={{
            backgroundImage: "url('/background9.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        />
      </Container>
    </React.Fragment>
  )
}

export default WeddingLetter
