let parseMedia = (media) => {
  if (typeof media === 'number') {
    return `only screen and (min-width: ${media}px)`
  }
  if (typeof media === 'string') {
    return media
  }
  return false
}

export default parseMedia
