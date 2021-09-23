import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../images/logo.svg'
import { Link as LinkS } from "react-scroll";

const Container = styled.div`
  justify-content: center;
  display: flex;
  height: 64px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
`
const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 48px;
    height: 48px;
  }
`

const RightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLink = styled(LinkS)`
  position: relative;
  font-weight: 500;
  font-size: 24px;
  padding: 0px 16px 8px 16px;
  cursor: pointer;

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
      background: #000;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
`

function Navbar() {
  return (
    <Container>
      <Wrapper>
      {/* left */}
      <LeftWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </LeftWrapper>
      {/* right */}
      <RightWrapper>
          <NavLink
            to="about"
            smooth={true}
            duration={750}
            exact="true"
          >
            About
          </NavLink>
          <NavLink
            to="skills"
            smooth={true}
            duration={750}
            exact="true"
          >
            Skills
          </NavLink>
          <NavLink
            to="projects"
            smooth={true}
            duration={750}
            exact="true"
          >
            Projects
          </NavLink>
          <NavLink>
            O
          </NavLink>
      </RightWrapper>
      
      </Wrapper>
    </Container>
  )
}

export default Navbar
