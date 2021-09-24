import React, { useRef } from 'react';
import styled from 'styled-components'
import { md } from '../responsive'
import emailjs from 'emailjs-com';

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
  width: 100%;
  max-width: 600px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 48px;
  border-radius: 20px;
  width: 100%;
  background-color: rgba(204, 204, 204, 0.5);
`
const Input = styled.input`
  padding: 5px 15px 5px 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 10px;
  outline: none;
  opacity: 1;
`
const TextArea = styled.textarea`
  padding: 10px 15px 10px 15px;
  font-size: 18px;
  width: 100%;
  height: 125px;
  border: none;
  border-radius: 10px;
  resize: none;
  margin-bottom: 20px;
  outline: none;
`
const Button = styled.button`
  width: 105%;
  height: 48px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 600;
  background-color: gray;
`


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_u7fwmgd', 'template_q79ixhk', form.current, 'user_9Onne8DOAZutOkPXRIfIR')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
      form.current.reset()
  }
  return (
    <Container id="contact">
      <Title>Get in <Span>Touch!</Span></Title>
      <Wrapper>
        <Form ref={form} onSubmit={sendEmail}>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
          />
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
          />
          <TextArea
            id="message"
            name="message"
            placeholder="Message"
          />
          <Button type="submit" value="Send">
            Send
          </Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Contact
