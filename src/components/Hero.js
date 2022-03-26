import React from "react";
import styled, { keyframes } from "styled-components";
import { Animated } from "react-animated-css";

import ImgSrc from "../assets/hero-background-experimental.jpg";

//Components
import BrandButton from "./styles/BrandButton.styled";
import TextAnimation from "./styles/TextAnimation.styled";
import Navbar from "../components/styles/Navbar.styled";

const StyledHeader = styled.div`

  background-image: url(${ImgSrc});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: center;

 .row {
    padding-top: 100px !important;
    padding-left: 50px;
  }

  h1 {
    color: #FCFCFC;
    font-size: 3rem;

  }

  @media (max-width: 820px) {
    text-align: left;
    padding: 100px 5px;

  }
}

`;

export default function Hero() {
  return (
    <div>
      <Animated
        animationIn="fadeIn"
        animationInDuration={2000}
        isVisible={true}
      >
        <Navbar />
        <StyledHeader>
          <div className="row">
            <div className="col">
              <h1>Technology </h1>
              <TextAnimation />
              <h2>
                Next generation of algorithms for accurate genotype prediction
              </h2>
            </div>
            <div className="col pt-5">
              <Animated
                animationIn="fadeIn"
                animationInDelay={2000}
                isVisible={true}
              >
                <BrandButton primary to="/products">
                  View products
                </BrandButton>
              </Animated>
            </div>
          </div>
        </StyledHeader>
      </Animated>
    </div>
  );
}
