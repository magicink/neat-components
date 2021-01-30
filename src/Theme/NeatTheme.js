// @flow
export const Directions: { [key: string]: string } = {
  LTR: 'LTR',
  RTL: 'RTL'
}

export type Direction = $Values<typeof Directions>

export type Theme = {
  color: ?string,
  columns: number,
  direction: Direction,
  gutter: string,
  media: ?string | ?number
}
export const NeatTheme: Theme = {
  color: null,
  columns: 12,
  direction: Directions.LTR,
  gutter: '20px',
  media: null
}
