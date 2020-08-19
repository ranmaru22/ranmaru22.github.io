import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faGithub, faStackOverflow, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About: React.FC = () => {
    return (
        <section id="about">
            <Container className="p-5 text-justify" fluid="md">
                <Row>
                    <Col>
                        <h3>About me</h3>
                        <p>
                            I am a self-taught programmer and web developer currently living in
                            Germany. I've had a passion for computers since I was little and became
                            interested in programming early on. I took my first steps with simple
                            game programming while in high school.
                        </p>
                        <p>
                            After working boring and mind-numbing office jobs for far too long, I
                            decided to make a change and do something I enjoy for a living.
                        </p>
                        <p>
                            My favourite webdev technologies are the <strong>MERN</strong> stack
                            with <strong>TypeScript</strong> and <strong>SCSS</strong>. My favourite
                            programming language in general is <strong>Rust</strong>.
                        </p>
                        <p>
                            I speak English, German, Japanese, and a little bit of Mandarin Chinese.
                        </p>
                        <p className="text-center">
                            <a href="https://github.com/ranmaru22">
                                <Icon className="mr-3" icon={faGithub} size="lg" />
                            </a>
                            <a href="https://stackoverflow.com/users/12570014/ranmaru">
                                <Icon className="mx-3" icon={faStackOverflow} size="lg" />
                            </a>
                            <a href="https://www.linkedin.com/in/alexsun82/">
                                <Icon className="mx-3" icon={faLinkedin} size="lg" />
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
