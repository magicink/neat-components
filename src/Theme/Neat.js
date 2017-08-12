// @flow
export const NeatTheme: {
  color: ?string,
  columns: number,
  direction: string,
  gutter: string,
  media: ?string |?number
} = {
  color: null,
  columns: 12,
  direction: 'ltr',
  gutter: '20px',
  media: null
}

const Neat: Function = ({
  color,
  columns,
  direction,
  gutter,
  media
}: typeof NeatTheme = NeatTheme): typeof NeatTheme => ({
  color: color || NeatTheme.color,
  columns: columns || NeatTheme.columns,
  direction: (direction === 'ltr' || direction === 'rtl') ? direction : NeatTheme.direction,
  gutter: gutter || NeatTheme.gutter,
  media: media || NeatTheme.media
})

export default Neat
