import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
    return (
        <section id="home">
            <Container id="headerSection" className="p-5" fluid>
                <Row>
                    <Col className="text-center">
                        <img className="mb-3" src="images/avataaars.svg" alt="Alex Sun" />
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <h1 className="header">Hi, I'm Alex</h1>
                        <h2 className="subheader">Programmer & Web Developer</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Header;
