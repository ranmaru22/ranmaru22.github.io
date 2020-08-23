import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Scrollspy from "react-scrollspy";

const scrollspyItems: ReadonlyArray<string> = ["home", "projects", "about", "contact"];

const NavBar: React.FC = () => (
    <>
        <Navbar id="main-nav" variant="dark" bg="dark" sticky="top" expand="lg" collapseOnSelect>
            <Container fluid>
                <Navbar.Brand href="#home">Alex Sun</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Scrollspy
                        className="ml-auto navbar-nav"
                        items={scrollspyItems}
                        currentClassName="active">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#about">About Me</Nav.Link>
                    </Scrollspy>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
);

export default NavBar;
