import React, { useState } from "react";
import styled from "styled-components";

import scrollDown from "../../img/scrollDown.png";
import logo from "../../img/logo.jpg";
import logo_mobile from "../../img/logo_mobile.jpg";

import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const NavbarToggler = styled.button`
  color: #e04343;
  background: rgba(0, 0, 0, 0);
  border: solid 1px rgba(250, 235, 215,.1);
  box-shadow: 0px 0px 4px rgba(250, 235, 215,.25);
  border-radius: 25px;
  padding: 5px 10px 0 10px;
  min-width: 150px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  h2 {
    transition: 0.2s ease-in-out;
  }
  &:hover {
    box-shadow: 0px 0px 4px rgba(250, 235, 215,.5);
    transition: 0.2s ease-in-out;
  }
  @media (max-width: 980px) {
    padding: 6px 10px 5px 10px;
    min-width: 100px;
    h2 {
      padding: 0;
      margin: 0;
    }
  @media (max-width: 500px) {
    box-shadow: 0px 0px 4px rgba(250, 235, 215,.1);
    padding: 5px 10px 5px 10px;
    min-width: 100px;
    h2 {
      padding: 0;
      margin: 0;
      font-size: 1.7rem;
    }
  }
`;

const HomePage = () => {
  const [collapsed2, setCollapsed2] = useState(true);
  const [loader, setLoader] = useState(true);

  const toggleNavbar2 = () => setCollapsed2(!collapsed2);

const observer = new MutationObserver(function(mutations_list) {
	mutations_list.forEach(function(mutation) {
		mutation.removedNodes.forEach(function(removed_node) {
			if(removed_node.id === 'loading') {
        setLoader(false);
				observer.disconnect();
			}
		});
	});
});

observer.observe(document.querySelector("#body"), { subtree: false, childList: true });

  return (
    <div className={loader ? "loading-body"  : ""}>
      <header id="home">
        <div className="nav-box-cont">
          <NavbarToggler onClick={toggleNavbar2}>
            {collapsed2 ? <h2>Robbie who?</h2> : <h2>Ah okay!</h2>}
          </NavbarToggler>
        </div>
        <About collapsed2={collapsed2} setCollapsed2={setCollapsed2} />
        <div className="row">
          <div className={collapsed2 ? "" : "scroll-hidden"}>
            <img 
              src={logo} 
              srcSet={`${logo} 1024w, ${logo_mobile} 500w`}
              alt="logo" 
              className="logo" 
            />
            <p>a full-stack web developer</p>
            <a
              href="#portfolio-section"
              className="scrollto wow fadeInUp delay-5s"
            >
              <p className="scrollto-text">Portfolio</p>
              <p className="scrollto--arrow">
                <img src={scrollDown} alt="scroll down arrow" />
              </p>
            </a>
          </div>
        </div>
      </header>
      <Portfolio />
      <Footer />
    </div>
  );
};

export default HomePage;
