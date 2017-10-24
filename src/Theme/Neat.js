// @flow
import { NeatTheme } from './NeatTheme'
import type { Theme } from './NeatTheme'

const Neat: Function = ({
  color,
  columns,
  direction,
  gutter,
  media
}: Theme = NeatTheme): Theme => ({
  color: color || NeatTheme.color,
  columns: columns || NeatTheme.columns,
  direction: (direction === 'ltr' || direction === 'rtl') ? direction : NeatTheme.direction,
  gutter: gutter || NeatTheme.gutter,
  media: media || NeatTheme.media
})

export default Neat
