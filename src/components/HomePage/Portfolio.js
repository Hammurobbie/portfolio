import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight} from 'react-icons/fa';

import missionControl from "../../img/missionControl.png";
import bhm from "../../img/bhm.png";
import hue from "../../img/hue.png";
import github from "../../img/github.png";
import github_hover from "../../img/github_hover.png";
import mango from "../../img/mango.png";
import abu from "../../img/abu.png";
import cancun from "../../img/cancun.png";

const Img = styled.img`
  width: 20px;
  padding-top: 10px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 25px;
  }
`;

const Carousel = styled.div`
  button {
    background: none;
    border: none;
    transition: all 0.2s ease-in-out;
    height: 50px

    svg {
      height: 100%;
      color: #e7e9d1;
      transition: all 0.2s ease-in-out;
    }

    svg:hover {
      color: #e04343;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const DeskContr = styled.button`
  opacity: 0.7;

  @media (max-width: 500px) {
    display: none;
  }
`;

const MobContr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  button {
    opacity: 0.7;
    background: none;
    border: none;
    transition: all 0.2s ease-in-out;
    height: 50px

    svg {
      height: 100%;
      color: #e7e9d1;
      transition: all 0.2s ease-in-out;
    }

    svg:hover {
      color: #e04343;
      transition: all 0.2s ease-in-out;
    }
  }

  @media (min-width: 500px) {
    display: none;
  }
`;

const LocInd = styled.div`
  opacity: 0.7;
  background: #e7e9d1;
  border-radius: 25px;
  height: 3px;
  width: 10px;
  box-shadow: 0px -3px 20px 0px rgba(135, 139, 123, .5);
`;

const carItems = [
  {
    id: 0,
    copy: "Conrad Abu Dhabi - one of many resort hotel sites I built or worked on components for in a shared monorepo",
    url: "https://www.hilton.com/en/hotels/auhetci-conrad-abu-dhabi-etihad-towers/",
    img: abu
  },
  {
    id: 1,
    copy: "LXR Mango House - each component was designed to be functionally and stylistically flexible",
    url: "https://www.hilton.com/en/hotels/sezitol-mango-house-seychelles/",
    img: mango
  },
  {
    id: 2,
    copy: "Hilton Cancun - all components are fully accessible and are used in more than 20 high-end resort sites",
    url: "https://hiltoncancun.hilton.com/en",
    img: cancun
  },
]

const Portfolio = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [carInd, setCarInd] = useState(0);

  const handleMove = (dir) => {
    if(dir === "next" && carInd >= carItems.length - 1) {
      setCarInd(0);
    } else if(dir === "next") {
      setCarInd(carInd + 1);
    } else if(dir === "prev" && carInd > 0) {
      setCarInd(carInd - 1);
    } else setCarInd(carItems.length - 1)
  };

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
        <MobContr>
          <button onClick={() => handleMove("prev")}>
            <FaAngleLeft />
          </button>
          {carItems.map(i => (
            <LocInd key={i.id} style={{background: i.id === carInd ? "#e04343" : null}} />
          ))}
          <button onClick={() => handleMove("next")}>
            <FaAngleRight/>
          </button>
        </MobContr>
        <Carousel>
          <DeskContr onClick={() => handleMove("prev")}>
            <FaAngleLeft />
          </DeskContr>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={carItems[carInd].url}
          >
            <img
              className="portfolio-img"
              src={carItems[carInd].img}
              alt="Nb Enviro Screenshot"
            ></img>
          </a>
          <DeskContr onClick={() => handleMove("next")}>
            <FaAngleRight/>
          </DeskContr>
        </Carousel>
        <div className="text-box">
          <h4>Hilton Resorts</h4>
          <h3>
            {carItems[carInd].copy}
            <br />
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://github.com/Hammurobbie/"
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
    </div>
  );
};

export default Portfolio;
