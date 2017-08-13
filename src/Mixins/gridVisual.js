// @flow
import { columnWidth } from '../Functions'
import { NeatTheme } from '../Theme/NeatTheme'

let gridVisual: Function = (theme: typeof NeatTheme): {
  'background-image'?: string
} => {
  let { color, gutter } = theme
  if (!gutter) return {}
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
