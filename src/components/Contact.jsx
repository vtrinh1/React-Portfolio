import Aos from 'aos'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { md } from '../responsive'
import emailjs from 'emailjs-com'

const Container = styled.div`
  padding: 64px 12px 112px;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  ${md({padding: "96px 12px 112px"})};
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
  padding: 17px 32px;
  border-radius: 20px;
  width: 100%;
  background-color: ${(props) => (props.light ? "#fff" : "#252525")};
  box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.54);
  ${md({padding: "32px 47px"})};
`
const Input = styled.input`
  padding: 5px 15px 5px 15px;
  color: ${(props) => (props.light ? "#1b1b1b" : "#ececec")};
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 100%;
  height: 32px;
  border: solid 2px #ececec;
  border-radius: 10px;
  outline: none;
  background: transparent;
  transition: all 200ms ease;
  ${md({fontSize: "18px", marginBottom: "15px"})};

  :focus{
    border-color: #FF6F3C;
  }
`
const TextArea = styled.textarea`
  padding: 10px 15px 10px 15px;
  color: ${(props) => (props.light ? "#1b1b1b" : "#ececec")};
  font-size: 16px;
  width: 100%;
  height: 125px;
  border: solid 2px #ececec;
  border-radius: 10px;
  resize: none;
  margin-bottom: 10px;
  outline: none;
  background: transparent;
  transition: all 200ms ease;
  ${md({fontSize: "18px", marginBottom: "20px"})};

  :focus{
    border-color: #FF6F3C;
  }
`
const Button = styled.button`
  width: 107%;
  color: #fff;
  height: 48px;
  border-radius: 10px;
  font-size: 18px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 600;
  background: #FF6F3C;
  border: solid 2px;
  border-color: #FF6F3C;
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
const SentButton = styled.button`
  width: 107%;
  color: #fff;
  height: 48px;
  border-radius: 10px;
  font-size: 18px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 600;
  background: #696969;
  border: solid 2px;
  border-color: #696969;
  transition: all 200ms ease-in-out;
  ${md({fontSize: "22px"})};

  :hover{
    cursor: not-allowed
  }
`


function Contact({ theme }) {
  Aos.init()
  const {REACT_APP_SERVICE_KEY, REACT_APP_USER_KEY, REACT_APP_TEMPLATE_KEY} = process.env;
  
  const form = useRef()

  const [formState, setFormState] = useState({
    name: null,
    email: null,
    message: null,
  })

  const [isValid, setIsValid] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  function handleChange(e) {
    setShowSuccess(false)
    const value = e.target.value
    const name = e.target.name
    const id = e.target.id
    let i = document.getElementById(id)

    if (value === "" || value === null) {
      i.style.borderColor = "red"
    } else {
      i.style.borderColor = "#FF6F3C"
    }

    setFormState({
      ...formState,
      [name]: value
    })
  }

  function highlightMissing() {
    for (const [key, value] of Object.entries(formState)) {
      if (value === "" || value === null) {
        let i = document.getElementById(key)
        i.style.borderColor = "red"
      }
    }
  }

  useEffect(() => {
    const name = formState.name
    const email = formState.email
    const message =formState.message
    if (name && email && message) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }

  }, [formState])

  function sendEmail(e) {
    e.preventDefault()

    if (!isValid) {
      highlightMissing()
      return
    }


    emailjs.sendForm(REACT_APP_SERVICE_KEY, REACT_APP_TEMPLATE_KEY, form.current, REACT_APP_USER_KEY)
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
      
    setShowSuccess(true)
  }

  return (
    <Container id="contact">
      <Title data-aos="fade">Get in <Span>Touch!</Span></Title>
      <Wrapper>
        <Form  data-aos="fade-up" ref={form} onSubmit={sendEmail} light={theme === "light"}>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            light={theme === "light"}
            onChange={handleChange}
          />
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            light={theme === "light"}
            onChange={handleChange}
          />
          <TextArea
            id="message"
            name="message"
            placeholder="Message"
            light={theme === "light"}
            onChange={handleChange}
          />
          {/* <Button type="submit" value="Send" light={theme === "light"}>
            Send
          </Button> */}
          {showSuccess ? 
          <SentButton light={theme === "light"}>
            Sent!
          </SentButton> :
          <Button type="submit" value="Send" light={theme === "light"}>
            Send
          </Button>
          }
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Contact
