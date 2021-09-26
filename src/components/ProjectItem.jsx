import Aos from 'aos'
import React from 'react'
import { SiGithub } from 'react-icons/si'
import { FaLink } from 'react-icons/fa'
import styled from 'styled-components'
import { md, sm } from '../responsive'



const Img = styled.img`
  width: 100%;
  transition: all 500ms ease;
`

const DescriptionWrapper = styled.div`
  position: absolute;
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  transform: translateY(100%);
  max-width: 80%;
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
  margin-bottom: 80px;
  transition: all 450ms ease;
  ${md({marginBottom: "135px"})};
  
  :last-child {
    margin-bottom: 0px;
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
  font-size: 24px;
  margin-bottom: 8px;
  text-align: center;
  ${md({fontSize: "32px"})};

`
const SubTitle = styled.h2`
  font-size: 20px;
  opacity: 0.8;
  text-align: center;
  ${md({fontSize: "24px"})};
`
const Info = styled.p`
  font-size: 16px;
  margin: 30px 0;
  display: none;
  text-align: center;
  ${md({fontSize: "20px"})};
  ${sm({display: "flex"})};
`

const LinkWrapper = styled.div`
  text-align: center;
  width: 80px;
  display: flex;
  justify-content: space-between;
`

const Link = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: #fff;
  transition: 300ms ease;
  opacity: 0.8;
  margin-top: 16px;
  ${md({fontSize: "28px"})};

  :hover {
    opacity: 0.3;
  }
`

function ProjectItem({item}) {
    Aos.init()

  return (
    <Container>
      <Wrapper data-aos="fade-up">
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
