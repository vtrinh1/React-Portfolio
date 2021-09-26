import React, { useEffect } from 'react'
import { IoIosArrowUp } from "react-icons/io"
import styled from 'styled-components'
import { Link as LinkS } from "react-scroll"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Button = styled(LinkS)`
  font-size: 32px;
  z-index: 3;
  cursor: pointer;
  position: fixed;
  bottom: 36px;
  display: none;
  transition: all 150ms;
  
  :hover {
    transform: scale(1.3);
    opacity: 0.8;
  }

  :active {
    transform: scale(1.1);
  }
`

function ScrollButton() {
  const checkScroll = () => {
    const position = window.pageYOffset
    if (position > 100) {
      let back = document.getElementById("showBack")
      back.style.display = "inline"
    } else {
      let back = document.getElementById("showBack")

      if (back) {
        back.style.display = "none"
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll, { passive: true })
  }, [])

  return (
    <>
      <Wrapper>
        <Button
          id="showBack"
          to="home"
          smooth={true}
          duration={750}
          exact="true"
        >
          <IoIosArrowUp />
        </Button>
      </Wrapper>
    </>
  )
}

export default ScrollButton
