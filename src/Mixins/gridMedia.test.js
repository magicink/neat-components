import gridMedia from './gridMedia'
import Neat from '../Theme/Neat'

describe('gridMedia()', () => {
  it('should handle numeric input', () => {
    let result = gridMedia(
      Neat({
        media: 500
      }),
      [{ backgroundColor: 'blue' }]
    )
    expect(Array.isArray(result)).toBe(true)
    expect(result.join('').replace(/\s+/g, ' ').trim()).toEqual(
      `
      @media only screen and (min-width: 500px) { background-color: blue; } 
    `.trim()
    )
  })
  it('should handle string input', () => {
    let result = gridMedia(
      Neat({
        media: 'only screen and (max-width: 100px)'
      }),
      [{ backgroundColor: 'red' }]
    )
    expect(Array.isArray(result)).toBe(true)
    expect(result.join('').replace(/\s+/g, ' ').trim()).toEqual(
      `
      @media only screen and (max-width: 100px) { background-color: red; } 
    `.trim()
    )
  })
  it('should return an empty array when no media is passed', () => {
    let result = gridMedia(Neat({}), [{ backgroundColor: 'red' }])
    expect(Array.isArray(result)).toBe(true)
    expect(result).toEqual([])
  })
})
