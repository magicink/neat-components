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
  direction: (direction === 'ltr' || direction === 'rtl') ? direction : defaults.direction,
  gutter: (typeof gutter === 'number') ? gutter : defaults.gutter,
  media: media || defaults.media
})

export default Neat
