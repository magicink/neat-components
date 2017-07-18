import parseMedia from './parseMedia'

describe('parseMedia()', () => {
  it('should handle no argument', () => {
    let result = parseMedia()
    expect(result).toBe(false)
  })
  it('should handle numbers', () => {
    let result = parseMedia(12)
    expect(result).toBe('only screen and (min-width: 12px)')
  })
  it('should handle strings', () => {
    let media = 'only screen and handle (max-width: 300px)'
    let result = parseMedia(media)
    expect(result).toBe(media)
  })
})
