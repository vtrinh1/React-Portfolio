import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 100%;
  transition: all 500ms ease;
`

const DescriptionWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 90px;
  transform: translateY(100%);
  max-width: 550px;
  z-index: 3;
  opacity: 0;
  transition: transform 450ms, opacity 300ms;
`
const Container = styled.div`
  display: flex;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  &:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #1c1d25;
    opacity: 0;
    transition: all 450ms ease-in-out;
    z-index: 2;
    transform: translateY(100%);
  }

  &:hover &:before {
    transform: translateY(0);
    opacity: 0.7;
  }

  &:hover ${Img}{
    transform: scale(1.1);
    filter: blur(5px);
  } 
  
  &:hover ${DescriptionWrapper}{
    opacity: 1;
    transform: translateY(-50%);
  }
`
const Title = styled.div`
  font-size: 40px;
  text-align: left;
  color: #fff;
`
const SubTitle = styled.div`
  text-align: left;
  color: #fff;
`
const Info = styled.div`
  margin: 16px 0;
  text-align: left;
  color: #fff;
`

function ProjectItem({item}) {
  return (
    <Container>
      <Img src={item.img} />
      <DescriptionWrapper>
        <Title>{item.title}</Title>
        <SubTitle>{item.subtitle}</SubTitle>
        <Info>{item.info}</Info>
      </DescriptionWrapper>
    </Container>

  )
}

export default ProjectItem
