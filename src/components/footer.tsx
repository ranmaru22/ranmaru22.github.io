import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
    return (
        <section id="footer">
            <Container id="footerSection" fluid>
                <Row className="p-3">
                    <Col className="d-flex justify-content-center align-items-center">
                        <p>
                            © 2020 <a href="https://github.com/ranmaru22">ranmaru22</a> - Website
                            code available on{" "}
                            <a href="https://github.com/ranmaru22/ranmaru22.github.io">GitHub</a>.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
