import React from 'react'
import styled from 'styled-components'
import { Link as LinkS } from "react-scroll"

const Scroll = styled.div`
  height: 36px;
  width: 20px;
  border: 2px solid #FF6F3C;
  position: relative;
  border-radius: 50px;
  cursor: pointer;
  transition: all 150ms;

  :before, :after {
    content: "";
    position: absolute;
    top: 30%;
    left: 50%;
    height: 6px;
    width: 6px;
    transform: translate(-50%, -100%) rotate(45deg);
    border: 2px solid #FF6F3C;
    border-top: transparent;
    border-left: transparent;
    animation: scroll-down 1.5s ease-in-out infinite;
  }

  .scroll-down::before {
    top: 30%;
    animation-delay: 0.3s;
  }

  @keyframes scroll-down {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      top: 90%;
      opacity: 0;
    }
  }
  :hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  :active {
    transform: scale(0.9);
  }
`

const Button = styled(LinkS)``

function ScrollDown() {
  return (
    <Button
      to="about"
      smooth={true}
      duration={1000}
      exact="true"
    >
      <Scroll />
    </Button>
  )
}

export default ScrollDown
