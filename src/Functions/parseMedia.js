let parseMedia = (media) => {
  if (!media) return false
  if (typeof media === 'number') {
    return `only screen and (min-width: ${media}px)`
  } else if (typeof media === 'string') {
    return media
  }
}

export default parseMedia
