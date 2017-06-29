import { columnWidth } from '../Functions'

let gridVisual = (theme) => {
  let { color, gutter } = theme
  if (!gutter) return false
  color = color || ''
  return {
    'background-image': `
      repeating-linear-gradient(
        to right, transparent, transparent,
        ${color} ${gutter},
        ${color} calc(${columnWidth(theme, 1)} + ${gutter})
      )
    `
  }
}

export default gridVisual
