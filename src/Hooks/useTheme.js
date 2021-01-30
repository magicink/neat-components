import React from 'react'
import { NeatTheme } from '../Theme/NeatTheme'

/**
 * Eventually this will replace the Theme provider.
 * @param props
 */
export const useTheme = props => {
  const [color, setColor] = React.useState(props.color ?? NeatTheme.color)
  const [columns, setColumns] = React.useState(
    props.columns ?? NeatTheme.columns
  )
  const [direction, setDirection] = React.useState(
    props.direction ?? NeatTheme.direction
  )
  const [gutter, setGutter] = React.useState(props.gutter ?? NeatTheme.gutter)
  const [media, setMedia] = React.useState(props.media ?? NeatTheme.media)
  return {
    color,
    columns,
    direction,
    gutter,
    media,
    setColor,
    setColumns,
    setDirection,
    setGutter,
    setMedia
  }
}
