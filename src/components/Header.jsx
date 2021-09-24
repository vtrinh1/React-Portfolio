import React from 'react'
import styled from 'styled-components'
import { AttachFile, Email, LinkedIn } from '@material-ui/icons';
import GitHub from '@material-ui/icons/GitHub';
import { md } from '../responsive';

const Container = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: -64px;
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

function Header() {
  return (
    <Container id="home">
      <Wrapper>
      <HeaderTitle>Hey I'm <Span>Vincent.</Span></HeaderTitle>
      <HeaderText>I'm an aspiring <Span>Frontend Software Engineer</Span> with a strong passion for building web applications with great user experiences.</HeaderText>
      <SocialIcons>
        <SocialIcon href="https://github.com/vtrinh1" target="_blank"><GitHub /></SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/vincenttrinh1/" target="_blank"><LinkedIn /></SocialIcon>
        <SocialIcon href="mailto:vincent.trinh1@hotmail.com" target="_blank"><Email /></SocialIcon>
        <SocialIcon href="https://github.com/vtrinh1" target="_blank"><AttachFile /></SocialIcon>
      </SocialIcons>
      </Wrapper>
    </Container>
  )
}

export default Header
