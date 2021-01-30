// @flow
import { columnWidth, floatDirection, parseUnit, stripUnit } from '../Functions'
import { NeatTheme } from '../Theme/NeatTheme'

type Styles = {
  'margin-left'?: string,
  'margin-right'?: string
}

let gridPush: Function = (
  theme: typeof NeatTheme,
  push: number = 0
): Styles => {
  const { direction, gutter } = theme
  if (push > 0) {
    let gutterValue = stripUnit(gutter)
    let gutterUnit = parseUnit(gutter)
    let affordance = `${gutterValue * 2}${gutterUnit}`
    return {
      [`margin-${floatDirection(direction)}`]: `
        calc(${columnWidth(theme, push)} + ${affordance})
      `
    }
  } else {
    return {
      [`margin-${floatDirection(direction)}`]: gutter
    }
  }
}

export default gridPush
