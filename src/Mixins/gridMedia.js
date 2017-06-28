import { parseMedia } from '../Functions'
import { css } from 'styled-components'

let gridMedia = (theme, ...args) => {
  const { media } = theme
  if (!media) return false
  return css`
    @media ${parseMedia(media)} {
      ${css(...args)}
    }
  `
}

export default gridMedia
