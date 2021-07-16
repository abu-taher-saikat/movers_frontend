import React from 'react'
import {Navbar , Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link> <Link to="/login">Login</Link> </Nav.Link>
                            <Nav.Link> <Link to="/register">Register</Link> </Nav.Link>
                          
                         
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
