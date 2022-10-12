import React from "react";
import styled from "styled-components";
import portfolio from "../../img/portfolio.png";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import mail from "../../img/mail.png";
import me from "../../img/me.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Collapse, Navbar, Nav, NavItem, NavLink } from "reactstrap";

const Icon = styled.img`
  width: 20px;
  height: 20px;
  display: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
`;

const Img = styled.img`
  object-fit: cover;
  border-radius: 50%;
  border: #e7e9d1 2px dotted;
  height: 20%;
  width: 20%;
  max-height: 180px;
  max-width: 180px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 20px 0px rgba(135, 139, 123, 0.5);
  @media (max-width: 500px) {
    box-shadow: 0px 0px 20px 0px rgba(135, 139, 123, 0.25);
    border: #e7e9d1 1px dotted;
    height: 35%;
    width: 35%;
  }
`;

const Div = styled.div`
  color: #e7e9d1;
  display: flex;
  justify-content: center;
  cursor: pointer !important;
  &:hover ${Icon} {
    display: inline;
    transition: 0.2s ease-in-out;
  }
  h5 {
    transition: 0.2s ease-in-out;
  }
`;

const About = ({ collapsed2, setCollapsed2 }) => {
  return (
    <div>
      <Navbar color="faded" light>
        <Collapse isOpen={!collapsed2} navbar>
          <Nav navbar>
            <NavItem>
              <Img alt="me" src={me} />
              <p>
                <span style={{ color: "#e04343" }}>I am a:</span> <br />
                Full-stack web developer based in Memphis, TN - all about a
                technical solution to a real-world problem.
                <br />
                <br />
                <span style={{ color: "#e04343" }}>
                  My skills include:
                </span>{" "}
                <br />
                Javascript <span style={{ color: "#e04343" }}>|</span> HTML{" "}
                <span style={{ color: "#e04343" }}>|</span> Python{" "}
                <span style={{ color: "#e04343" }}>|</span> CSS{" "}
                <span style={{ color: "#e04343" }}>|</span> React{" "}
                <span style={{ color: "#e04343" }}>|</span> Redux{" "}
                <span style={{ color: "#e04343" }}>|</span> RESTful APIs{" "}
                <span style={{ color: "#e04343" }}>|</span> GraphQL{" "}
                <span style={{ color: "#e04343" }}>|</span> Node.js{" "}
                <span style={{ color: "#e04343" }}>|</span> Express{" "}
                <span style={{ color: "#e04343" }}>|</span> PostgreSQL
              </p>
              <br />
            </NavItem>
            <NavItem>
              <p style={{ color: "#e04343" }}>Check out my:</p>
              <NavLink
                onClick={() => setCollapsed2(true)}
                href="#portfolio-section"
                className="navEase"
              >
                <Div>
                  <Icon src={portfolio} alt="portfolio icon" />
                  <h5>Portfolio</h5>
                  <Icon src={portfolio} alt="portfolio icon" />
                </Div>
              </NavLink>

              <NavLink
                target="_blank"
                href="https://www.linkedin.com/in/robbie-porter-"
                className="navEase"
              >
                <Div>
                  <Icon src={linkedin} alt="portfolio icon" />
                  <h5>LinkedIn</h5>
                  <Icon src={linkedin} alt="portfolio icon" />
                </Div>
              </NavLink>

              <NavLink
                target="_blank"
                href="https://github.com/Hammurobbie"
                className="navEase"
              >
                <Div>
                  <Icon src={github} alt="portfolio icon" />
                  <h5>Github</h5>
                  <Icon src={github} alt="portfolio icon" />
                </Div>
              </NavLink>
              <NavLink
                target="_blank"
                href="mailto: rthomporter@gmail.com"
                className="navEase"
              >
                <Div>
                  <Icon src={mail} alt="mail icon" />
                  <h5>Ability to respond to an email</h5>
                  <Icon src={mail} alt="mail icon" />
                </Div>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default About;
