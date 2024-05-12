import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, I am <span className="purple">Lalit Negi </span>
            from <span className="purple">India.</span>
            <br />
            I am currently a student. <span className="purple">
              
               </span>
            <br />
            I am pursuing BTECH CSE from Abesit, I always had passion for coding and how things build/ works.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Self help books
            </li>
          </ul>
{/* 
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
