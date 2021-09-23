import React from 'react'
import styled from 'styled-components'
import { languageItems, technologyItems } from '../data'
import SkillItem from './SkillItem'
import { lg, md, xl } from '../responsive'

const Container = styled.div`
  padding: 96px 0px;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  
`

const Title = styled.h1`
  font-size: 48px;
  padding-bottom: 96px;

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
  padding-bottom: 48px;
  width: 100%;
  ${xl({ maxWidth: "1300px", justifyContent: "space-between", flexDirection: "row", alignItems: "start" })};
`

const Skill = styled.div`
  flex: 1;
  max-width: 600px;

  :first-child {
    margin-bottom: 96px;
  }  
`

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const SkillTitle = styled.h2`
  font-size: 32px;
  padding-bottom: 36px;
`

function Stack() {
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
                <SkillItem item={item} key={item.id} />
              ))}
            </SkillList>
        </Skill>
        <Skill>
          <SkillTitle>
            <Span>Languages</Span> I've worked with.
          </SkillTitle>
            <SkillList>
              {languageItems.map((item) => (
                <SkillItem item={item} key={item.id} />
              ))}
            </SkillList>
        </Skill>
      </Wrapper>
    </Container>
  )
}

export default Stack
