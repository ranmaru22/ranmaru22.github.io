import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
    return (
        <section id="footer">
            <Container id="footerSection" className="py-2" fluid>
                <Row>
                    <Col className="pt-3 d-flex justify-content-between align-items-center">
                        <p>
                            © 2020 <a href="https://github.com/ranmaru22">ranmaru22</a>
                        </p>
                        <p>
                            Source code available on{" "}
                            <a href="https://github.com/ranmaru22/ranmaru22.github.io">GitHub</a>.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
