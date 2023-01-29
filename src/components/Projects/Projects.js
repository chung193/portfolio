import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="Assets/Projects/vifish.jpg"
              isBlog={false}
              title="Vifish"
              description="fishing vessel monitoring build with jquery and openstreetmap api, include android app and ios app"
              demoLink="https://vifish.vn/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="Assets/Projects/blog.png"
              isBlog={false}
              title="Hello world my blog"
              description="My personal blog page build with reactjs and Tailwind Css which takes the content from server side is codeginiter 4.2. Supports dark mode and easy to write blogs using backend is codeginiter."
              demoLink="https://chungvd.name.vn/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="Assets/Projects/funbongda.png"
              isBlog={false}
              title="FunBongDa"
              description="Online quiz game about football. Avaliable on ios and android"
              demoLink="https://apkpure.com/bodagame/com.bodafun.quiz"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
