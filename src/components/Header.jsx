import React from 'react'
import styled from 'styled-components'
import { AttachFile, Email, LinkedIn } from '@material-ui/icons';
import GitHub from '@material-ui/icons/GitHub';

const Container = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: -64px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderTitle = styled.h1`
  font-size: 84px;
`

const Span = styled.span`
  color: #FF6F3C;
`

const HeaderText = styled.p`
  font-weight: 500;
  font-size: 24px;
  width: 60vh;
  padding: 20px 0px;
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
      <HeaderTitle>Hey <Span>I'm Vincent.</Span></HeaderTitle>
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
