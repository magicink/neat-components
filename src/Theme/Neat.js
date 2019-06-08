// @flow
import { Directions, NeatTheme } from './NeatTheme'
import type { Theme } from './NeatTheme'

const Neat: Function = (theme: Theme = NeatTheme): Theme => ({
  color: theme.color || NeatTheme.color,
  columns: theme.columns || NeatTheme.columns,
  direction: (theme.direction === Directions.LTR || theme.direction === Directions.RTL)
    ? theme.direction
    : NeatTheme.direction,
  gutter: theme.gutter || NeatTheme.gutter,
  media: theme.media || NeatTheme.media
})

export default Neat
