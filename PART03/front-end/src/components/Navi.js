import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Error from './Error';

const Navi = ({user, signOutFunc, errors}) => (
    <>
    <Navbar expand="md" bg="light">
      <div className="container">
        <Navbar.Brand href="/">
          <img className="d-inline-block " alt="photobook" src="images/logo.png" height="20px" />
          Photos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title={user || "user"} id="collasible-nav-dropdown"> 
              <NavDropdown.Item onClick={signOutFunc} >Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    {errors && 
      <div className="container">
        <br/>
        <Error error={errors} />
      </div>
    } 
    </>
);

export default Navi

