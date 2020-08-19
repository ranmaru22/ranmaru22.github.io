import React from "react";
import { Container, CardColumns, Card } from "react-bootstrap";

export interface Project {
    image: string;
    alt: string;
    label: string;
    description: string;
    link: string;
}

// const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {};

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
    return (
        <div id="projects">
            <Container className="p-5 text-justify" fluid="md">
                <h3>Creative Portfolio</h3>
                <CardColumns>
                    {projects.map((project, i) => (
                        <Card bg="light">
                            <Card.Img
                                className="project-img"
                                variant="top"
                                src={project.image}
                                alt={project.alt}
                            />
                            <Card.Body>
                                <Card.Title>{project.label}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <a href={project.link}>View on GitHub</a>
                            </Card.Footer>
                        </Card>
                    ))}
                </CardColumns>
            </Container>
        </div>
    );
};

export default Projects;
