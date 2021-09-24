import React from 'react'
import styled from 'styled-components'
import me from '../images/me.png'
import { md } from '../responsive'

const Container = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.light ? "#ececec" : "#1f1f1f")};
  padding: 48px 12px;
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
  ${md({flexDirection: "row"})};
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Image = styled.img`
  height: 24vh;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  ${md({height: "30vh"})};
`

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  text-align: left;
  padding: 12px 0px;
  ${md({fontSize: "24px"})};
`

function About({ theme }) {
  return (
    <Container id="about" light={theme === "light"}>
      <Title>About <Span>Me.</Span></Title>
      <Wrapper>
        <ImageContainer>
            <Image src={me} />
        </ImageContainer>
        <TextContainer>
          <Text>
            Building <Span>beautiful</Span>, <Span>responsive</Span> and <Span>customizable</Span> user experiences is my passion. I enjoy pushing myself to take problems and <Span>creating solutions</Span> that positively affect people.
          </Text>
          <Text>
            Currently, I am a full-time <Span>computer science</Span> student, a part-time IT operator and private programming tutor! I'm always looking for a challenge and enjoy exploring new areas of work.
          </Text>
        </TextContainer>
      </Wrapper>
    </Container>
  )
}

export default About
