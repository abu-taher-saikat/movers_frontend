import React from 'react'
import {Navbar , Container, Nav} from 'react-bootstrap'


const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Login</Nav.Link>
                            {/* <Nav.Link href="#link">Register</Nav.Link> */}
                            {/* <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
