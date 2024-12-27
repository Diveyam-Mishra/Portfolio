import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Diveyam Mishra </span>
            from <span className="purple"> Indore, India.</span>
            <br />
            I am currently employed as a software developer at Trabii.
            <br />
            I am pursuing my Bachelors in Electrical Engineering at SGSITS, Indore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Curiosity is more important than knowledge"{" "}
          </p>
          <footer className="blockquote-footer">Diveyam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
