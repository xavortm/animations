import Head from "next/head";
import styled, { keyframes } from "styled-components";

import Header from "../components/header";
import Footer from "../components/footer";

import { Main } from "../components/layout/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Animations</title>
        <meta name="description" content="Generated by Animations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <SVGWrapper>
          <svg
            width="324"
            height="370"
            viewBox="0 0 324 370"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Circle cx="216" cy="108" r="107.85" fill="#DD1F15" />
            <One
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 67.1999L0.5 47.3999L84 6.1001V188V272H17V255.1V246.85V188V67.1999Z"
              fill="#DD1F15"
            />
            <Up
              fillRule="evenodd"
              clipRule="evenodd"
              d="M146.7 310.5C154.4 310.5 161.4 306.1 161.4 295.8V238.3H194.9V337.9H161.4V328.9C153.8 335.9 143.5 340.1 133.4 340.1C110.4 340.1 100.5 323.7 100.5 305.1V272V271.4V238.297H134V238.3V272V297.4C134 304.2 136.4 310.5 146.7 310.5ZM248.5 247.7C256 240.3 265.4 236.3 276.8 236.3C304.6 236.3 321.9 258.9 321.9 288.2C321.9 317.8 304.6 340.1 276.8 340.1C265.4 340.1 256.1 335.9 248.5 328.9V369.9H214.8V238.3H248.5V247.7ZM248.5 288C248.5 300.7 254.9 311.4 267.8 311.4C280.5 311.4 286.4 300.4 286.4 288C286.4 275.5 280.5 264.8 267.8 264.8C254.8 264.8 248.5 275.3 248.5 288Z"
              fill="black"
            />
            <Arrow
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.4521 265.498L190.25 88.7L169.25 67.7H260.45V158.9L239.45 137.9L62.7042 314.646C41.2706 304.281 23.8606 286.906 13.4521 265.498Z"
              fill="white"
            />
          </svg>
        </SVGWrapper>
      </Main>

      <Footer />
    </>
  );
}

const animateBG = keyframes`
	0% {
    background: conic-gradient(
      black 0deg, white 0deg
    );
  }
  
  100% {
    background: conic-gradient(
      black 360deg, white 360deg
    );
  }
`;

const SVGWrapper = styled.div`
  width: 30em;
  height: 30em;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  margin: 0 auto;

  svg {
    position: relative;
    z-index: 1;
  }
`;

const animateCircle = keyframes`
	0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
  
  100% {
    transform: scale(1);
  }
`;

const animateOne = keyframes`
	0% {
    transform: translateY(1em);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
  
  100% {
    transform: translateY(0);
  }
`;

const animateUp = keyframes`
	0% {
    transform: translateY(1em) rotate(10deg);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
  
  100% {
    transform: translateY(0) rotate(0);
  }
`;

const animateArrow = keyframes`
	0% {
    transform: translate(-100%, 90%);
  }
  
  100% {
    transform: translate(0);
  }
`;

const Circle = styled.circle`
  animation-name: ${animateCircle};
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-delay: 0.25s;
  transform-origin: center center;
`;

const Up = styled.path`
  animation-name: ${animateUp};
  animation-fill-mode: both;
  animation-duration: 0.75s;
  animation-delay: 1s;
  transform-origin: center center;
`;

const One = styled.path`
  animation-name: ${animateOne};
  animation-fill-mode: both;
  animation-duration: 1s;
  transform-origin: center center;
`;

const Arrow = styled.path`
  animation-name: ${animateArrow};
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-delay: 1s;
  transform-origin: center center;
`;
