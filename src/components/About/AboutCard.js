import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saumya Mishra.</span>
            {/* from <span className="purple"> Gorakhpur, India.</span> */}
            <br/>
            Aspiring Front-End Developer | Passionate About Crafting User-Friendly.
            <br/>
             I’m Saumya Mishra, a budding front-end devel-oper passionate about 
             <br/>creating visually appealing and responsive web interfaces. 
             <br/> I’m on a journey to turn my passionfor coding into beautiful, user-centric websites.
             <br/>
             When not working on projects, you can find me 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Content
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Saumya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
