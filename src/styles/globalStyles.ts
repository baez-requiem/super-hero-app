
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.gray_900};
    min-width: 320px;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray_800};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray_300};
  }

  @media (max-width: 1080px) {
    html { font-size: 93.75%; }
  }

  @media (max-width: 720px) {
    html { font-size: 87.5%; }
  }
  
  @media (max-width: 480px) {
    html { font-size: 81.25%; }
  }


  /* body {
    background-color: #001019;
    font-size: 14px;
    color: #f5f5f5;
    font-family: 'Nunito', sans-serif;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, button {
    font-family: 'Roboto', sans-serif;
  }
  a {
    all: unset;
  } */
`