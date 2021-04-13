import React, { useState } from "react";
import styled from "styled-components";

import nbenviro from "../../img/nbenviro.png";
import missionControl from "../../img/missionControl.png";
import bhm from "../../img/bhm.png";
import hue from "../../img/hue.png";
import github from "../../img/github.png";
import github_hover from "../../img/github_hover.png";

const Img = styled.img`
  width: 20px;
  padding-top: 10px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 25px;
  }
`;

const Portfolio = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);

  return (
    <div id="portfolio-section" className="portfolio-section">
      <div className="portfolio-piece">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtu.be/IE5NFcyit98"
        >
          <img
            className="portfolio-img"
            src={bhm}
            alt="BH&M Screenshot"
          ></img>
        </a>
        <div className="text-box">
          <h4>BH&M Dashboard</h4>
          <h3>
          Internal business tool for the company that provides all environmental services to Memphis Light, Gas & Water.
            <br />
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://github.com/Hammurobbie"
            >
              <Img
                alt="github link"
                onMouseEnter={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                src={hover ? github_hover : github}
              ></Img>
            </a>
          </h3>
        </div>
      </div>
      <div className="portfolio-piece">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/posts/robbie-porter-_this-weekend-i-wrote-some-code-to-control-activity-6759294076928987136-R5Fk"
        >
          <img
            className="portfolio-img"
            src={hue}
            alt="Hue Screenshot"
          ></img>
        </a>
        <div className="text-box">
          <h4>Philips Hue/Wiz Hub</h4>
          <h3>
          A command line hub for synchronized control of Philips Hue and Wiz lights that provides control of all lights or rooms
            <br />
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://github.com/Hammurobbie/hue_lights"
            >
              <Img
                alt="github link"
                onMouseEnter={() => setHover2(true)}
                onMouseOut={() => setHover2(false)}
                src={hover2 ? github_hover : github}
              ></Img>
            </a>
          </h3>
        </div>
      </div>
      <div className="portfolio-piece">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtu.be/daNBSogBkac?t=11066"
        >
          <img
            className="portfolio-img"
            src={missionControl}
            alt="Mission Control Screenshot"
          ></img>
        </a>
        <div className="text-box">
          <h4>Mission Control</h4>
          <h3>
            A program management tool developed with a cross-functional team to be used by Lambda School and other organizations
            <br />
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://github.com/Hammurobbie/mission-control-fe"
            >
              <Img
                alt="github link"
                onMouseEnter={() => setHover3(true)}
                onMouseOut={() => setHover3(false)}
                src={hover3 ? github_hover : github}
              ></Img>
            </a>
          </h3>
        </div>
      </div>
      <div className="portfolio-piece">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pedantic-wilson-c149b0.netlify.app/"
        >
          <img
            className="portfolio-img"
            src={nbenviro}
            alt="Nb Enviro Screenshot"
          ></img>
        </a>
        <div className="text-box">
          <h4>Navy Base Database</h4>
          <h3>
            A native desktop application and database created for the Mid-South
            Navy Base to lookup previous environmental work
            <br />
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://github.com/Hammurobbie/enviro-lookup"
            >
              <Img
                alt="github link"
                onMouseEnter={() => setHover4(true)}
                onMouseOut={() => setHover4(false)}
                src={hover4 ? github_hover : github}
              ></Img>
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
