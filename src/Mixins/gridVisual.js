import columnWidth from '../Functions/columnWidth'

let gridVisual = (theme) => {
  let { color, gutter } = theme
  if (!gutter) return false
  color = color || ''
  return {
    'background-image': `
      repeating-linear-gradient(
        to right, transparent, transparent,
        ${color} ${gutter},
        ${color} calc(${columnWidth({theme, span: 1})} + ${gutter})
      )
    `.replace(/\s+/g, ' ').trim()
  }
}

export default gridVisual
