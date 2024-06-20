import React from 'react'
import logo from './logo.svg'
import './App.css'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const bold = css`
  font-weight: bold;
`

const containerStyles = css`
  background-color: pink;
  ${bold}
`

const Button = styled.button`
  width: 200px;
  height: 100px;
  ${bold}
`

function App() {
  return (
    <div className="App">
      <div css={containerStyles}>
        <h2
          css={css`
            color: tomato;
          `}
        >
          REACT
        </h2>
        <Button>style button</Button>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
