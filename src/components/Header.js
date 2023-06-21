import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div className='col'>

<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7064f8105512449.5f7b1e51a8e7a.jpg"
              width="30"
              height="30"
              style={{borderRadius:10}}
              className="d-inline-block align-top "
            />{' '}
        SHOPY
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header