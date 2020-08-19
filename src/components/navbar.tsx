import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar: React.FC = () => {
    return (
        <>
            <Navbar id="mainNav" variant="dark" bg="dark" sticky="top" expand="lg" collapseOnSelect>
                <Container fluid>
                    <Navbar.Brand href="#home">Alex Sun</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey="#home" className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#about">About Me</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
