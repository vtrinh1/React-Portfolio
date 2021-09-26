import Aos from 'aos'
import React from 'react'
import styled from 'styled-components'
import { md } from '../responsive'

const SkillIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  ${md({padding: "16px"})};
`

const SkillIcon = styled.div`
  font-size: 32px;
  transition: all 300ms ease;
  ${md({fontSize: "44px"})};

`

const SkillName = styled.div`
  position: absolute;
  bottom: 10px;
  transform: scale(0);
  transition: all 300ms;
  font-size: 13px;
  opacity: 0;
  font-weight: 600;
  ${md({fontSize: "16px"})};
`

const Container = styled.div`
  padding: 10px;
  width: 75px;
  color: #${(props)=>props.color};
  background-color: ${(props) => (props.light ? "transparent" : "#252525")};
  border-radius: 10%;
  box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.54);
  margin: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  ${md({width: "100px"})};

  &:hover ${SkillIcon}{
    filter: brightness(80%);
    opacity: 0.86;
    transform: scale(0.9);
  }

  &:hover ${SkillName}{
    transform: scale(1);
    opacity: 1;
  }
`

function SkillItem({item, theme}) {
  Aos.init()
  return (
    <Container data-aos="fade-up" color={item.color} light={theme === "light"}>
      <SkillIconWrapper>
        <SkillIcon>{item.icon}</SkillIcon>
      </SkillIconWrapper>
      <SkillName>{item.title}</SkillName>
    </Container>
  )
}

export default SkillItem
