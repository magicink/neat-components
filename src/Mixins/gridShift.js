// @flow
import { columnWidth, floatDirection } from '../Functions'
import { NeatTheme } from '../Theme/NeatTheme'

let gridShift: Function = (theme: typeof NeatTheme, shift: number = 0): {
  left?: string,
  right?: string,
  position?: string
} => {
  const { direction, gutter } = theme
  if (!direction || gutter === undefined) return {}
  if (shift > 0) {
    let width = columnWidth(theme, shift)
    return {
      [`${floatDirection(direction)}`]: `
        calc(${width} + ${gutter})
      `,
      position: 'relative'
    }
  } else {
    return {
      [`${floatDirection(direction)}`]: gutter
    }
  }
}

export default gridShift
