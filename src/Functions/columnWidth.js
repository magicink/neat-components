// @flow
import parseUnit from './parseUnit'
import stripUnit from './stripUnit'
import { NeatTheme } from '../Theme/NeatTheme'

const columnWidth: Function = (
  theme: typeof NeatTheme,
  span: number
): string => {
  const { columns, gutter } = theme
  if (!columns || gutter === undefined) return '0'
  let ratio = span / columns
  let gutterValue = stripUnit(gutter)
  let gutterUnit = parseUnit(gutter)
  if (gutterValue === 0) {
    return `${ratio * 100}%`
  } else {
    let affordance = `${gutterValue + gutterValue * ratio}${gutterUnit}`
    return `${ratio * 100}% - ${affordance}`
  }
}

export default columnWidth
