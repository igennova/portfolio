import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiDjango } from "react-icons/di";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiAnaconda ,
  SiTailwindcss,
  SiBootstrap ,
  SiPostgresql,
  SiOpencv,
  SiAmazonaws,
  SiGooglecloud,
  SiFastapi,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiDjango  />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFastapi  />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFastapi  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi  />
      </Col> */}
    </Row>
  );
}

export default Techstack;
