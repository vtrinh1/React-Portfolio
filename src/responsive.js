import { css } from "styled-components"

export const sm = (props) => {
  return css`
    @media (min-width: 640px) {
      ${props}
    }
  `
}

export const md = (props) => {
  return css`
    @media (min-width: 768px) {
      ${props}
    }
  `
}

export const lg = (props) => {
  return css`
    @media (min-width: 1024px) {
      ${props}
    }
  `
}

export const xl = (props) => {
  return css`
    @media (min-width: 1280px) {
      ${props}
    }
  `
}

export const xxl = (props) => {
  return css`
    @media (min-width: 1536px) {
      ${props}
    }
  `
}