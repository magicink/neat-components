const defaults = {
  color: null,
  columns: 12,
  direction: 'ltr',
  gutter: '20px',
  media: null
}

let Neat = ({
  color,
  columns,
  direction,
  gutter,
  media
} = defaults) => ({
  color: color || defaults.color,
  columns: columns || defaults.columns,
  direction: direction || defaults.direction,
  gutter: gutter || defaults.direction,
  media: media || defaults.media
})

export default Neat
