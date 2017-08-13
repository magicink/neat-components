// @flow
import { parseMedia } from '../Functions'
import { css } from 'styled-components'
import { NeatTheme } from '../Theme/Neat'

let gridMedia: Function = (theme: typeof NeatTheme, ...args: Array<any>): Array<any> => {
  const { media } = theme
  if (!media) return []
  return css`
    @media ${parseMedia(media)} {
      ${css(...args)}
    }
  `
}

export default gridMedia
