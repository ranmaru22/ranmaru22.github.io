import React from "react";
import { Container, CardColumns, Card } from "react-bootstrap";

export interface Project {
    image: string;
    alt: string;
    label: string;
    description: string;
    link: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <Card bg="dark">
        <Card.Img className="project-img" src={project.image} alt={project.alt} />
        <Card.Body>
            <Card.Title>{project.label}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="card-footer">
            <a href={project.link}>View on GitHub</a>
        </Card.Footer>
    </Card>
);

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => (
    <div id="projects" className="p-lg-5 pt-5 bg-info text-light">
        <Container className="mt-5 pt-5 text-justify" fluid="md">
            <h3>Creative Portfolio</h3>
            <CardColumns>
                {projects.map(project => (
                    <ProjectCard project={project} />
                ))}
            </CardColumns>
        </Container>
    </div>
);

export default Projects;
