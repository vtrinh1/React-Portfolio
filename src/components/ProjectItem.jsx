import React from 'react'
import { SiGithub } from 'react-icons/si'
import { FaLink } from 'react-icons/fa'
import styled from 'styled-components'



const Img = styled.img`
  width: 100%;
  transition: all 500ms ease;
`

const DescriptionWrapper = styled.div`
  position: absolute;
  text-align: start;
  top: 50%;
  transform: translateY(100%);
  max-width: 70%;
  z-index: 3;
  opacity: 0;
  transition: transform 450ms, opacity 300ms;
  color: #fff;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: all 450ms ease;
  border-radius: 40px;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.45);

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #1c1d25;
    opacity: 0;
    transition: all 450ms ease;
    z-index: 2;
    transform: translateY(100%);
  }

  :hover:before{
  transform: translateY(0);
  opacity: 0.8;
  }

`

const Container = styled.div`
  margin-bottom: 135px;
  transition: all 450ms ease;
  
  :last-child {
    margin-bottom: 135px;
  }

  :hover {
    ${Img} {
      transform: scale(1.1);
      filter: blur(5px);
    }
    ${DescriptionWrapper} {
    opacity: 1;
    transform: translateY(-50%);
    }
  }
`

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 8px;
  
  :after {
    bottom: -8px;
    content: "";
    display: block;
    height: 4px;
    width: 20%;
    background: #fff;
  }
`
const SubTitle = styled.h2`
  font-size: 30px;
  opacity: 0.8;
`
const Info = styled.p`
  font-size: 24px;
  margin: 30px 0;
  opacity: 0.8;
`

const LinkWrapper = styled.div`
  width: 12.5%;
  display: flex;
  justify-content: space-between;
`

const Link = styled.a`
  font-size: 32px;
  text-decoration: none;
  color: #fff;
  transition: 300ms ease;
  opacity: 0.8;

  :hover {
    opacity: 0.3;
  }
`

function ProjectItem({item}) {
  return (
    <Container>
      <Wrapper>
        <Img src={item.img} />
        <DescriptionWrapper>
          <Title>{item.title}</Title>
          <SubTitle>{item.subtitle}</SubTitle>
          <Info>{item.info}</Info>
          <LinkWrapper>
            <Link href={item.github} target="_blank"><SiGithub /></Link>
            <Link href={item.website} target="_blank"><FaLink /></Link>
          </LinkWrapper>
        </DescriptionWrapper>
      </Wrapper>
    </Container>

  )
}

export default ProjectItem
