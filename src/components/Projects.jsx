import React from 'react'
import styled from 'styled-components'
import { projectItems } from '../data'
import ProjectItem from './ProjectItem'

const Container = styled.div`
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  display: flex;  
  flex-direction: column;
  background-color: #e4e4e4cc;
`

const Title = styled.h1`
  font-size: 48px;
  padding: 96px;

  :after {
    bottom: -8px;
    content: "";
    display: block;
    height: 4px;
    position: relative;
    width: 60%;
    left: calc(50% - 30%);
    background: #FF6F3C;
    opacity: 0.5;
 }
`

const Span = styled.span`
  color: #FF6F3C;
`

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 60vw;
`



function Projects() {
  return (
    <Container>
      <Title>Personal <Span>Projects.</Span></Title>
      <Wrapper>
          {projectItems.map((item) => (
              <ProjectItem item={item} key={item.id} />
          ))}
      </Wrapper>
    </Container>
  )
}

export default Projects
