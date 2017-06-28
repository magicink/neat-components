import { columnWidth, floatDirection } from '../Functions'

let gridShift = (theme, shift = 0) => {
  const { direction, gutter } = theme
  if (!direction || gutter === undefined) return false
  if (shift > 0) {
    let width = columnWidth(theme, shift)
    
    return {
      [`${floatDirection(direction)}`]: `
        calc(${width} + ${gutter})
      `.replace(/\s+/g, ' ').trim(),
      position: 'relative'
    }
  } else {
    return {
      [`${floatDirection(direction)}`]: gutter
    }
  }
}

export default gridShift
