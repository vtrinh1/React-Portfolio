import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 200ms linear;
  }
  `

export const lightTheme = {
  body: '#FFF',
  text: '#1b1b1b',
}

export const darkTheme = {
  body: '#1b1b1b',
  text: '#ececec',
}