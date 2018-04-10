// @flow
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Neat, {gridColumn, gridMedia, gridContainer} from '../../bundle'

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

export class GridMedia extends React.Component {
  render () {
    return [
      <h1 key={'header'}><code>gridMedia</code></h1>,
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
    ]
  }
}
