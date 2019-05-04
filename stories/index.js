import Neat, { gridColumn, gridContainer, gridMedia } from '../bundle'
import styled, { ThemeProvider } from 'styled-components'
import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Neat Components', module)
  .addParameters({
    readme: {
      sidebar: require('../README.md')
    }
  })
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
  .add('A Responsive Grid', () => {
    const mobileGrid = Neat({
      columns: 12,
      gutter: '10px',
      media: 'only screen and (max-width: 600px)'
    })

    const desktopGrid = Neat({
      columns: 12,
      gutter: '20px',
      media: 'only screen and (min-width: 601px)'
    })

    const Column = styled.div`
      height: 50px;
      background-color: yellow;
      margin-top: 1rem;
      ${gridColumn(mobileGrid, 2)}
      ${gridMedia(desktopGrid, [{
        ...gridColumn(desktopGrid, 1),
        'background-color': 'red'
      }])}
    `

    const Container = styled.div`
      ${gridContainer()}
    `
    return (
      <ThemeProvider key={'provider'} theme={Neat()}>
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
