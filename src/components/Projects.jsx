import React from 'react'
import styled from 'styled-components'
import { projectItems } from '../data'
import { md } from '../responsive'
import ProjectItem from './ProjectItem'

const Container = styled.div`
  padding: 48px 12px;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  display: flex;  
  flex-direction: column;
  background-color: ${(props) => (props.light ? "#ececec" : "#1f1f1f")};
  ${md({padding: "96px 12px"})};
`

const Title = styled.h1`
  font-size: 32px;
  padding-bottom: 48px;
  ${md({fontSize: "48px", paddingBottom: "96px"})};

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
  width: 100%;
  max-width: 800px;
`



function Projects({ theme }) {
  return (
    <Container id="projects" light={theme === "light"}>
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
