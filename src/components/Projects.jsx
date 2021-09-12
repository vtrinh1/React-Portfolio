import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
`

const Title = styled.h1`
  font-size: 64px;
  padding: 96px;
`

const Span = styled.span`
  color: #FF6F3C;
`

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  width: 60vw;
`



function Projects() {
  return (
    <Container>
      <Title>My <Span>Personal Projects.</Span></Title>
      <Wrapper>
        
      </Wrapper>
    </Container>
  )
}

export default Projects
