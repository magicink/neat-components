import React from 'react'
import { storiesOf } from '@storybook/react'
import styled, { ThemeProvider } from 'styled-components'
import Neat, { gridColumn, gridContainer } from '../bundle'

storiesOf('Neat Components', module)
  .add('12 Column Grid', () => {
    let constants = () => {
      return `
        background-color: #00d4ff;
        height: 300px;
        margin-top: 1em;
      `
    }

    let Container = styled.div`
      ${gridContainer()};
    `
    let Column = styled.div`
      ${constants()} ${props => gridColumn(props.theme, 1)};
    `
    return (
      <ThemeProvider theme={Neat()}>
        <div>
          <Container>
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
          </Container>
        </div>
      </ThemeProvider>
    )
  })
  .add('3 Column Grid', () => {
    let constants = () => {
      return `
        background-color: #00d4ff;
        height: 300px;
        margin-top: 1em;
      `
    }

    let Container = styled.div`
      ${gridContainer()};
    `
    let Column = styled.div`
      ${constants()} ${props => gridColumn(props.theme, 4)};
    `
    return (
      <ThemeProvider theme={Neat()}>
        <div>
          <Container>
            <Column />
            <Column />
            <Column />
          </Container>
        </div>
      </ThemeProvider>
    )
  })
  .add('9/3 Column Grid', () => {
    let constants = () => {
      return `
        background-color: #00d4ff;
        height: 300px;
        margin-top: 1em;
      `
    }

    let Container = styled.div`
      ${gridContainer()};
    `
    let ContentArea = styled.div`
      ${constants()} ${props => gridColumn(props.theme, 9)};
    `
    let Sidebar = styled.div`
      ${constants()} ${props => gridColumn(props.theme, 3)}};
    `
    return (
      <div>
        <ThemeProvider theme={Neat()}>
          <div>
            <Container>
              <ContentArea />
              <Sidebar />
            </Container>
          </div>
        </ThemeProvider>
        <ThemeProvider theme={Neat()}>
          <div>
            <Container>
              <Sidebar />
              <ContentArea />
            </Container>
          </div>
        </ThemeProvider>
      </div>
    )
  })
