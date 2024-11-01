import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import appstore from "../../Assets/Projects/image.png"
import sonicchat from "../../Assets/Projects/Chatapp.png"
import tesseract from "../../Assets/Projects/Tesseract.png"
import notes from "../../Assets/Projects/notes.png"
import Nova_video from "../../Assets/Nova_video.png"

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
            imgPath={appstore}
            isBlog={false}
            title="Apna Store"
            description="An App Store for India where you can download any app and can upload you app also in an easy way."
            ghLink="https://github.com/igennova/App_Store"
            // demoLink="https://tenderui.vercel.app/login"
            builtWith={["React.js", "MongoDb", "AWS", "Expressjs","Nodejs"]}
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={sonicchat}
            isBlog={false}
            title="Sonic Chat"
            description="A Web Chat app based on MERN where you can chat easily with lots of emoji . "
            ghLink="https://github.com/igennova/Chat-Mern-App"
            // demoLink="https://rahulnegi20.github.io/flash-type/"
            builtWith={["MERN"]}
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={tesseract}
            isBlog={false}
            title="Nova Convertor"
            description="If you want to search question that is written in your notebook now nova convertor is here you can convert image to text with the help of it"
            ghLink="https://github.com/igennova/Tesseract"
            demoLink="https://tesseract-pi.vercel.app/"
            builtWith={["React.js"]}
          // demoLink="https://editor.soumya-jit.tech/"              
          />
        </Col>
        

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={notes}
            isBlog={false}
            title="Nova Notes"
            description="Explore a comprehensive notes website offering detailed study materials and flowcharts for students. Organized by subjects, it's the perfect resource for simplifying complex topics and boosting exam preparation!"
            ghLink="https://github.com/igennova/Notes"
            builtWith={["React.js"]}
           demoLink="https://notes-2s1i.vercel.app/"
          />
        </Col>
        /*

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={Nova_video}
            isBlog={false}
            title="NOVA VIDEO GENERATOR"
            description="Create stunning videos in moments with NOVA Video Generator! This AI-powered tool effortlessly transforms your ideas into dynamic video content, perfect for presentations, social media, and beyond"
            ghLink="https://github.com/igennova/text-to-video/tree/master"
            builtWith={["Expressjs", "BigModelAI","NODEJS"]}
             demoLink="https://text-to-video-1wr1.onrender.com/"

          />
        </Col>
        {/*

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={bookadvisor}
            isBlog={false}
            title="Online Advisor Booking API"
            description="Online Bood your advisor with this REST API, You can list the available advisors and book/schedule them on spcecific data and time. Demo available on Github 👇."
            ghLink="https://github.com/rahulnegi20/Book-Advisor"
            builtWith={["Django Rest Framework", "Postgres"]}
          />
        </Col> */}
      </Row>
    </Container>
    </Container >
  );
}

export default Projects;
