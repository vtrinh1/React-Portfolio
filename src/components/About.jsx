import Aos from 'aos'
import React from 'react'
import styled from 'styled-components'
import me from '../images/me.png'
import { md } from '../responsive'
import Pdf from '../assets/resume.pdf'

const Container = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.light ? "#ececec" : "#252525")};
  padding: 64px 24px;
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
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
  
  ${md({flexDirection: "row", paddingBottom: "48px"})};
`

const ImageContainer = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`

const Image = styled.img`
  height: 20vh;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  ${md({height: "30vh"})};
`

const Description = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  max-width: 500px;
`

const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin-bottom: 18px;
  ${md({fontSize: "22px", textAlign: "left"})};
`

const Resume = styled.div`
  text-align: center;
  margin-top: 12px;
  ${md({textAlign: "left"})};
`
const Button = styled.a`
  cursor: pointer;
  font-size: 20px;
  padding: 10px 80px;
  font-weight: 500;
  background: #FF6F3C;
  color: #fff;
  border: solid 2px #FF6F3C;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  ${md({fontSize: "22px"})};

  :hover{
    background-color: transparent;
    border: solid 2px;
    color: ${(props) => (props.light ? "#FF6F3C" : "#fff")};
    border-color: ${(props) => (props.light ? "#FF6F3C" : "#fff")};
  }

  :active{
    transition: all 0ms;
    color: ${(props) => (props.light ? "#252525" : "#FF6F3C")};
    border-color: ${(props) => (props.light ? "#252525" : "#FF6F3C")};
  }
`

function About({ theme }) {
  Aos.init()

  return (
    <Container id="about" light={theme === "light"}>
      <Title data-aos="fade">About <Span>Me.</Span></Title>
      <Wrapper>
        <ImageContainer data-aos="fade-up">
            <Image src={me} />
        </ImageContainer>
        <Description>
            <Text data-aos="fade-up">
              Building <Span>beautiful</Span>, <Span>responsive</Span> and <Span>customizable</Span> user experiences is my passion. I enjoy pushing myself to take problems and <Span>creating solutions</Span> that positively affect people.
            </Text>
            <Text data-aos="fade-up">
              Currently, I am a full-time <Span>computer science</Span> student, a part-time IT operator and private programming tutor.
            </Text>
            <Text data-aos="fade-up">
              Check out my resume!
            </Text>
            <Resume data-aos="fade-up">
              <Button light={theme === "light"} target="_blank" href={Pdf}>
                Resume
              </Button>
            </Resume>
        </Description>
      </Wrapper>
    </Container>
  )
}

export default About
