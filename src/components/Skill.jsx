import React from 'react'
import styled from 'styled-components'
import { languageItems, technologyItems } from '../data'
import SkillItem from './SkillItem'
import { md, xl } from '../responsive'

const Container = styled.div`
  padding: 48px 12px;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
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
  align-items: center;
  flex-direction: column;
  width: 100%;
  ${xl({ maxWidth: "1300px", justifyContent: "space-between", flexDirection: "row", alignItems: "start" })};
`

const Skill = styled.div`
  flex: 1;
  max-width: 550px;
  ${md({maxWidth: "600px"})};

  :first-child {
    margin-bottom: 24px;
    ${md({marginBottom: "64px"})};
    ${xl({marginBottom: "0"})};
  }  
`

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const SkillTitle = styled.h2`
  font-size: 24px;
  padding-bottom: 18px;
  ${md({fontSize: "32px", paddingBottom: "36px"})};
`

function Stack({ theme }) {
  return (
    <Container id="skills">
      <Title>
        My <Span>Skill Stack.</Span>
      </Title>
      <Wrapper>
        <Skill>
          <SkillTitle>
            <Span>Technology</Span> I've used.
          </SkillTitle>
            <SkillList>
              {technologyItems.map((item) => (
                <SkillItem item={item} key={item.id} theme={theme} />
              ))}
            </SkillList>
        </Skill>
        <Skill>
          <SkillTitle>
            <Span>Languages</Span> I've worked with.
          </SkillTitle>
            <SkillList>
              {languageItems.map((item) => (
                <SkillItem item={item} key={item.id} theme={theme} />
              ))}
            </SkillList>
        </Skill>
      </Wrapper>
    </Container>
  )
}

export default Stack
