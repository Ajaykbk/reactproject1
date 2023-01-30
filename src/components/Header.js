import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
        <Navbar bg="dark sticky-top" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/1RnFFT8F/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Konico Cafe
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header