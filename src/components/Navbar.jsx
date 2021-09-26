import React from 'react'
import styled from 'styled-components'
import { Link as LinkS } from "react-scroll"
import { FiMoon, FiSun } from "react-icons/fi"
import { md, sm } from '../responsive'
import Aos from 'aos'

const Container = styled.div`
  justify-content: center;
  display: flex;
  height: 64px;
  padding: 15px 5px;
  ${sm({padding: "15px 48px"})};
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
`
const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
`

const RightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLink = styled(LinkS)`
  position: relative;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 10px;
  ${md({fontSize: "24px", padding: "10px 25px"})};

  &:hover:after { 
      width: 80%;
      left: calc(50% - 40%);
    }
  &:after {    
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 3px;
      left: 50%;
      position: absolute;
      background: ${(props) => (props.light ? "black" : "white")};
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
`

const Toggle = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    background: none;
    font-size: 32px;
    transition: all 150ms;

  :hover  {
    transform: scale(1.1);
    opacity: 0.8;
  }

  :active {
    transform: scale(0.9);
  }
`;


function Navbar({ themeToggler, theme }) {
  Aos.init()
  const icon = theme === "light" ? <FiMoon color={"#000"} /> : <FiSun color={"#fff"} />

  return (
    <Container>
      <Wrapper data-aos="fade">
        {/* left */}
        <LeftWrapper>
          <NavLink
              to="about"
              smooth={true}
              duration={1000}
              exact="true"
              light={theme === "light"}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="skills"
              smooth={true}
              duration={1000}
              exact="true"
              light={theme === "light"}
            >
              SKILLS
            </NavLink>
            <NavLink
              to="projects"
              smooth={true}
              duration={1000}
              exact="true"
              light={theme === "light"}
            >
              PROJECTS
            </NavLink>
            <NavLink
              to="contact"
              smooth={true}
              duration={1000}
              exact="true"
              light={theme === "light"}
            >
              CONTACT
            </NavLink>
        </LeftWrapper>
        {/* right */}
        <RightWrapper >
          <Toggle onClick={themeToggler}>
            {icon}
          </Toggle>
        </RightWrapper>
      </Wrapper>
    </Container>
  )
}

export default Navbar
