import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='py-3' collapseOnSelect expand="lg" bg="light" variant="dark">
            <Container>
            <Navbar.Brand className='logo' href="#home"><img src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                <Nav.Link className='text-dark' to="/">Home</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link className='text-dark' href="#deets"><FaShoppingCart /></Nav.Link>
                <Nav.Link className='btn' to="/login">Login</Nav.Link>
                <Nav.Link className='btn' to="/signUp">Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;