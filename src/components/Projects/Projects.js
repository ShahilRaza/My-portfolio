import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="OTT PlatForm APIs (Self Project)"
              description="Implemented a robust authentication system for an OTT platform, ensuring secure access and effective user management. Developed backend services for user registration, login, and role-based authentication, supporting different user types: Normal User, Admin, and Super Admin. Integrated industry-standard encryption methods to ensure data security"
              ghLink="https://github.com/ShahilRaza/Movies-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="InstaFusion Socila Media Apps Back End APIs(Self Project)"
              description="This Instagram-inspired app allows users to send and accept follow requests. Notifications are sent via Google Cloud Messaging (GCM) when a follow request is sent and accepted"
              ghLink="https://github.com/ShahilRaza/InstaFusion_Social_Media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="DMW (Company Projects)"
              description="This healthcare platform facilitates online appointment scheduling and doctor selection, allowing users to book appointments based on provider availability. It integrates a calendar for displaying time slots and streamlines hospital operations with comprehensive management features"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
