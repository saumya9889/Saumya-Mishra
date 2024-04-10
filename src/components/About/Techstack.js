import React from "react";
import { Col, Row } from "react-bootstrap";


import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiSass,
  DiMaterializecss,
  DiBootstrap,
  DiMysql,
  
  
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiJquery,
  SiWordpress,
  SiCss3,
  SiMui
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiMaterializecss />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col> 
    </Row>
  );
}

export default Techstack;
