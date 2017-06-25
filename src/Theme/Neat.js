let Neat = ({
  color,
  columns,
  direction,
  gutter,
  media
} = {
  color: null,
  columns: 12,
  direction: 'ltr',
  gutter: '20px',
  media: null
}) => ({
  theme: {
    color,
    columns,
    direction,
    gutter,
    media
  }
})

export default Neat
