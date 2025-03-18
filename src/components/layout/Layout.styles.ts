import '@fontsource/quicksand/400.css'

import styled, { createGlobalStyle } from 'styled-components'

export const GlobalColors = createGlobalStyle`
  body {
    --black: hsl(0, 0%, 0%);
    --white: hsl(0, 0%, 100%);

    --color-1: var(--black);

    --light-0: hsl(0, 0%, 95%);
    --light: hsl(0, 0%, 90%);
    --light-2: hsl(0, 0%, 85%);
    --light-3: hsl(0, 0%, 80%);

    --dark-0: hsl(128, 50%, 10%);
    --dark: hsl(128, 50.00%, 14.90%);
    --dark-2: hsl(128, 50%, 20%);
    --dark-3: hsl(128, 50%, 25%);
    --dark-3-5: hsl(128, 50%, 25%, .5);

    --primary: hsl(37, 97%, 52%);
    --secondary: hsl(5, 81%, 37%);

    --red: hsl(5, 81%, 38%);
  }
`


export const GlobalStyles = createGlobalStyle`
  body {
    margin: initial;
    display: initial;
    background-color: var(--light);
    color: var(--color-1);
    
		font-family: 'Quicksand', sans-serif;

    h1, h2, h3, h4, h5, h6 {
      margin-top: .5em;
      margin-bottom: .2em;
    }

    h1 {
      font-size: 28pt;
    }

    h2 {
      font-size: 24pt;
    }

    h3 {
      font-size: 20pt;
    }

    h4 {
      font-size: 18pt;
    }

    h5 {
      font-size: 14pt;
    }

    h6 {
      font-size: 12pt;
    }

    a {
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      display: inline-flex;
      flex-direction: column;
      align-items: center;

      &.link {

        &::after {
          content: '';
          display: block;
          width: 0;
          height: 1px;
          background-color: var(--primary);
          transition: width .2s;
        }
  
        &:hover {
          &::after {
            display: block;
            width: 100%;
          }
        }
      }

    }
  }
`

export const ElementStyles = createGlobalStyle`
  input, select {
    padding: .3rem 1rem;
    font-size: 11pt;
    border: 2px solid var(--light-2);
    outline: none;
    font-family: unset;

    &:focus {
      border-color: var(--primary);
    }
  }
`

export const MainContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100%;
`
