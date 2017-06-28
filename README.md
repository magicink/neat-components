# Neat Components

A Styled Components implementation of Thoughtbot's Neat (2.0)

### Usage

```javascript
import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Neat, {
  gridContainer,
  gridColumn,
  gridShift
} from 'neat-components'

let constants = () => {
  return `
    background-color: blue;
    height: 50px;
    margin-top: 1em;
  `
}

let Cellblock = styled.div`
  ${gridContainer()}
`
let Column = styled.div`
  ${constants()}
  ${props => gridColumn(props.theme, 1)}
`

let Shifted = styled.div`
  ${constants()}
  ${props => gridColumn(props.theme, 1)}
  ${props => gridShift(props.theme, 2)}
`

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={Neat()}>
        <div>
          <Cellblock>
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
          </Cellblock>
          <Cellblock>
            <Column />
            <Shifted />
            <Shifted />
            <Shifted />
          </Cellblock>
        </div>
      </ThemeProvider>
    )
  }
}

export default App

```