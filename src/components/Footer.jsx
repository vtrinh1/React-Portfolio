import React from 'react'
import styled from 'styled-components'
import { Email, LinkedIn, Twitter } from '@material-ui/icons';
import GitHub from '@material-ui/icons/GitHub';
import { sm } from '../responsive';

const Container = styled.div`
  margin-top: -112px;
  height: 64px;
  padding: 24px;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  ${sm({flexDirection: "row"})};
`
const Left = styled.div`
  margin-top: 12px;
  ${sm({marginTop: "0px"})};
`

const Copyright = styled.p`
  font-weight: 500;
  font-size: 22px;
  color: ${(props) => (props.light ? "#252525" : "#ececec")};
`
const Right = styled.div`
`
const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`
const SocialIcon = styled.a`
  padding: 0 10px;
  cursor: pointer;
  transition: all 200ms ease-in;
  display: flex;
  align-items: center;
  color: ${(props) => (props.light ? "#252525" : "#ececec")};

  &:hover {
    color: #505050;
  }
`

function Footer({ theme }) {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Copyright light={theme === "light"}>&copy; {new Date().getFullYear()} Vincent Trinh</Copyright>
        </Left>
        <Right>
          <SocialIcons>
            <SocialIcon href="https://github.com/vtrinh1" target="_blank" light={theme === "light"}><GitHub /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/vincenttrinh1/" target="_blank" light={theme === "light"}><LinkedIn /></SocialIcon>
            <SocialIcon href="mailto:vincent.trinh1@hotmail.com" target="_blank" light={theme === "light"}><Email /></SocialIcon>
            <SocialIcon href="https://twitter.com/VinnieTrinnie" target="_blank" light={theme === "light"}><Twitter /></SocialIcon>
          </SocialIcons>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Footer
