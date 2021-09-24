import React from 'react'
import styled from 'styled-components'
import { Email, LinkedIn, Twitter } from '@material-ui/icons';
import GitHub from '@material-ui/icons/GitHub';

const Container = styled.div`
  margin-top: -60px;
  background-color: transparent;
  padding: 48px;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Left = styled.div`
  
`

const Copyright = styled.p`
  font-weight: 500;
  font-size: 24px;
`
const Right = styled.div`
`
const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`
const SocialIcon = styled.a`
  padding: 0 10px;
  cursor: pointer;
  transition: all 200ms ease-in;
  color: #414141;

  &:hover {
    color: #505050;
  }
`

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Copyright>&copy; {new Date().getFullYear()} Vincent Trinh</Copyright>
        </Left>
        <Right>
          <SocialIcons>
            <SocialIcon href="https://github.com/vtrinh1" target="_blank"><GitHub /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/vincenttrinh1/" target="_blank"><LinkedIn /></SocialIcon>
            <SocialIcon href="mailto:vincent.trinh1@hotmail.com" target="_blank"><Email /></SocialIcon>
        <SocialIcon href="https://twitter.com/VinnieTrinnie" target="_blank"><Twitter /></SocialIcon>
          </SocialIcons>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Footer
