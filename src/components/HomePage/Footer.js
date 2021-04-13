import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 5px 0px 10px 0px;
  margin: 0 auto;
  p {
    color: oldlace;
    opacity: 0.55;
    font-size: 1.75rem;
  }
`;

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterDiv>
      <p className="footer-text">
        Copyright © {year} |{" "}
        <span style={{ color: "#e04343" }}>Robbie Porter</span>
      </p>
    </FooterDiv>
  );
};

export default Footer;
