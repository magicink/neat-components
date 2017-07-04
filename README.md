# Neat Components

A Styled Components implementation of Thoughtbot's Neat 2.0

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

let Container = styled.div`
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
          <Container>
            <Column />
            <Column />
            <Column />
            <Column />
          </Container>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
```

## API

### Neat([settings])
Returns a theme object. You can pass this theme to a `ThemeProvider` component. For example
```javascript
<ThemeProvider theme={Neat()}>
  ...
</ThemeProvider>
```

You can pass in a `settings` object to create a custom grid. The `settings` object has the following properties:

**`color`**: Used by `gridVisual()` to determine the color the grid (default: `null`).

**`columns`**: The number of columns the grid supports (default: `12`).

**`direction`**: The direction columns float. Accepts `ltr` (default) or `rtl`.

**`gutter`**: The spacing between columns (default: `20px`)

**`media`**: Used by `gridMedia()` to specify the media the grid should be applied. It can accept a string (i.e. `only screen and (max-width: 800px)`) or a number (i.e `800`). The later would produce `only screen and (min-width: 800px)`. Defaults to `null`.

```javascript
const CustomGrid = Neat({columns: 3, gutter: '60px'})
const Container = styled.div`
  margin-top: 1rem;
  ${gridContainer()}
`
const WideColumn = styled.div`
  background-image: linear-gradient(to bottom right, #21e9f4, #00d4ff);
  border-radius: 5px;
  height: 20rem;
  ${props => gridColumn(props.theme, 1)}
`

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={Neat()}>
        <Container>
          <WideColumn theme={CustomGrid} />
          <WideColumn theme={CustomGrid} />
          <WideColumn theme={CustomGrid} />
        </Container>
      </ThemeProvider>
    )
  }
}
```

### gridCollapse(theme)

Used to create grids within grids.

```javascript
const SidebarGrid = Neat({
  columns: 3,
  gutter: '40px'
})

const GalleryGrid = Neat({
  columns: 4,
  gutter: '40px'
})

const Container = styled.div`
  ${gridContainer()}
`

const SideBar = styled.div`
  height: 19rem;
  ${props => gridColumn(SidebarGrid, 1)}
`

const Gallery = styled.div`
  ${props => gridColumn(GalleryGrid, 2)}
`

const GalleryContainer = styled.div`
  ${gridCollapse(GalleryGrid)}
  ${gridContainer()}
`

const GalleryItem = styled.div`
  background-color: #496278;
  height: 4rem;
  margin-bottom: 1rem;
  ${gridColumn(GalleryGrid, 1)}
`

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={Neat()}>
        <Container>
          <SideBar />
          <Gallery>
            <GalleryContainer>
              <GalleryItem />
              ...
            </GalleryContainer>
          </Gallery>
        </Container>
      </ThemeProvider>
    )
  }
}
```

### gridColumn(theme, span)

Creates a component that occupies `span` number of a given theme's columns

```javascript
let Column = styled.div`
  ${props => gridColumn(props.theme, 1)}
`

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={Neat()}>
        <div>
          <Container>
            <Column />
            <Column />
            <Column />
            <Column />
          </Container>
        </div>
      </ThemeProvider>
    )
  }
}
```

### gridContainer()

Injects a clearfix solution into the component.

```javascript
const Container = styled.div`
  ${gridContainer()}
`

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={Neat()}>
        <Container>
          ...
        </Container>
      </ThemeProvider>
    )
  }
}
```

### gridMedia(theme)

Used to inject media queries into the component.

```javascript
let MobileGrid = Neat({
  columns: 1,
  gutter: '20px',
  media: 'only screen and (max-width: 800px)'
})

let DesktopGrid = Neat({
  columns: 1,
  gutter: '40px',
  media: 'only screen and (max-width: 1200px)'
})

let Logo = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  ${props => gridColumn(MobileGrid, 1)}
  ${props => gridMedia(DesktopGrid, [
    `height: 150px`,
    gridColumn(MobileGrid, 1)
  ])}
`
```

### gridShift(theme, shift)

Shifts a component `shift` number of columns. This reorganizes the components..

```javascript
let constants = () => {
  return `
    background-color: blue;
    height: 50px;
    margin-top: 1em;
  `
}

let Container = styled.div`
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
          <Container>
            <Column />
            <Shifted /> // Shifted one column to the right.
          </Container>
        </div>
      </ThemeProvider>
    )
  }
}
```

### gridPush(theme, push)

Pushes the component `push` number of columns. It's similar to `gridShift()` but does not rearrange the components.

```javascript
let constants = () => {
  return `
    background-color: blue;
    height: 50px;
    margin-top: 1em;
  `
}

let Container = styled.div`
  ${gridContainer()}
`
let Column = styled.div`
  ${constants()}
  ${props => gridColumn(props.theme, 1)}
`

let Pushed = styled.div`
  ${constants()}
  ${props => gridColumn(props.theme, 1)}
  ${props => gridPush(props.theme, 2)}
`

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={Neat()}>
        <div>
          <Container>
            <Column />
            <Pushed /> // Pushed one column to the right.
          </Container>
        </div>
      </ThemeProvider>
    )
  }
}

```

### gridVisual()

Creates series of visual guidelines based on the grid system

## References

- [Neat 2.x](http://neat.bourbon.io)
- [styled-components](https://www.styled-components.com/)