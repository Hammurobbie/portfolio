import React, { useState, useRef } from "react";
import styled from "styled-components";

import scrollDown from "../../img/scrollDown.png";
import logo from "../../img/logo.jpg";

import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const NavbarToggler = styled.button`
  color: #e04343;
  background: rgba(0, 0, 0, 0);
  border: solid 1px rgba(250, 235, 215,.1);
  box-shadow: 0px 0px 4px rgba(250, 235, 215,.25);
  border-radius: 25px;
  padding: 5px 10px;
  min-width: 150px;
  cursor: pointer;
  transition: fadeIn 0.5s ease forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 20px;
    transition: fadeIn 0.5s ease forwards;
  }
  &:hover {
    color: rgba(250, 235, 215,.5);
    box-shadow: 0px 0px 4px rgba(250, 235, 215,.5);
    transition: fadeIn 0.5s ease forwards;
  }
  @media (max-width: 980px) {
    padding: 6px 10px 5px 10px;
    min-width: 100px;
    span {
      padding: 0;
      margin: 0;
    }
  @media (max-width: 500px) {
    box-shadow: 0px 0px 4px rgba(250, 235, 215,.1);
    padding: 5px 10px 5px 10px;
    min-width: 100px;
    span {
      padding: 0;
      margin: 0;
      font-size: 1.7rem;
    }
  }
`;

const FadeWrapper = styled.div`
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const HomePage = () => {
  const [collapsed2, setCollapsed2] = useState(true);
  const toggleNavbar2 = () => setCollapsed2(!collapsed2);
  const portRef = useRef(null);

  return (
    <FadeWrapper>
      <header id="home">
        <div className="nav-box-cont">
          <NavbarToggler onClick={toggleNavbar2}>
            {collapsed2 ? <span>Robbie who?</span> : <span>Ah okay!</span>}
          </NavbarToggler>
        </div>
        <About collapsed2={collapsed2} setCollapsed2={setCollapsed2} />
        <div className="row">
          <div className={collapsed2 ? "" : "scroll-hidden"}>
            <img src={logo} alt="logo" className="logo" />
            <p>software engineer</p>
            <div
              onClick={() =>
                portRef?.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="scrollto wow fadeInUp delay-5s"
            >
              <p className="scrollto-text">Portfolio</p>
              <p className="scrollto--arrow">
                <img src={scrollDown} alt="scroll down arrow" />
              </p>
            </div>
          </div>
        </div>
      </header>
      <Portfolio portRef={portRef} />
      <Footer />
    </FadeWrapper>
  );
};

export default HomePage;
