import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    return (
        <div className='mb-5'>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>Dragon News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features" className='text-white'>All News</Nav.Link>
                            <Nav.Link href="#pricing" className='text-white'>Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className='text-white'>More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" className='text-white'>
                                Dank memes
                            </Nav.Link>
                        </Nav>
                        <div className='d-block d-lg-none text-white'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;