import React from 'react'
import styled from 'styled-components'

const SkillIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const SkillIcon = styled.div`
  font-size: 64px;
  transition: all 300ms ease;
`

const SkillName = styled.div`
  position: absolute;
  bottom: 10px;
  transform: scale(0);
  transition: all 300ms;
  font-size: 20px;
  opacity: 0;
  font-weight: 600;
`

const Container = styled.div`
  padding: 10px;
  width: 20%;
  color: #${(props)=>props.color};
  border-radius: 10%;
  box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.54);
  margin: 12px;
  position: relative;
  display: flex;
  justify-content: center;

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

function SkillItem({item}) {
  return (
    <Container color={item.color}>
      <SkillIconWrapper>
        <SkillIcon>{item.icon}</SkillIcon>
      </SkillIconWrapper>
      <SkillName>{item.title}</SkillName>
    </Container>
  )
}

export default SkillItem
