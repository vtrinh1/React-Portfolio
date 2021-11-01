import React from 'react'
import styled from 'styled-components'
import Aos from "aos"
import "aos/dist/aos.css"
import { Email, LinkedIn, Twitter } from '@material-ui/icons'
import GitHub from '@material-ui/icons/GitHub'
import { md } from '../responsive'
import ScrollDown from './ScrollDown'

const Container = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: -94px;
  padding: 0px 12px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeaderTitle = styled.h1`
  font-size: 64px;
  ${md({fontSize: "84px"})};
`

const Span = styled.span`
  color: #FF6F3C;
`

const HeaderText = styled.p`
  font-weight: 500;
  font-size: 18px;
  max-width: 500px;
  padding: 20px 0px;
  ${md({fontSize: "24px"})};
`

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`
const SocialIcon = styled.a`
  padding: 0 10px;
  color: #FF6F3C;
  cursor: pointer;
  transition: all 200ms ease-in;
  height: 24px;

  &:hover {
    color: #FF9A3C;
  }
`

const ScrollDownWrapper = styled.div`
  bottom: 5%;
  position: absolute;
  display: flex;
  align-items: end;
  justify-content: center;
`

function Header() {
    Aos.init({ duration: 1500 })

  return (
    <Container id="home">
      <Wrapper>
        <HeaderTitle data-aos="fade-up" data-aos-delay="750">Hey I'm <Span>Vincent.</Span></HeaderTitle>
        <HeaderText data-aos="fade-up" data-aos-delay="1000">I'm an aspiring <Span>Frontend Software Engineer</Span> passionate about building web applications with great user experiences.</HeaderText>
        <SocialIcons>
          <div data-aos="fade-up" data-aos-delay="1250">
            <SocialIcon href="https://github.com/vtrinh1" target="_blank"><GitHub /></SocialIcon>
          </div>
          <div data-aos="fade-up" data-aos-delay="1300">
            <SocialIcon href="https://www.linkedin.com/in/vincenttrinh1/" target="_blank"><LinkedIn /></SocialIcon>
          </div>
          <div data-aos="fade-up" data-aos-delay="1350">
          <SocialIcon href="mailto:vincent.trinh1@hotmail.com" target="_blank"><Email /></SocialIcon></div>
          <div data-aos="fade-up" data-aos-delay="1400">
            <SocialIcon href="https://twitter.com/VinnieTrinnie" target="_blank"><Twitter /></SocialIcon>
          </div>
        </SocialIcons>
      </Wrapper>
      <ScrollDownWrapper data-aos="fade-down" data-aos-delay="1750" data-aos-anchor-placement="top">
        <ScrollDown />
      </ScrollDownWrapper>
    </Container>
  )
}

export default Header
