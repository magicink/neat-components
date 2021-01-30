import gridVisual from './gridVisual'
import { columnWidth } from '../Functions'
import Neat from '../Theme/Neat'

describe('gridVisual()', () => {
  it('should return the correct object', () => {
    let color = 'blue'
    let result = gridVisual(Neat({ color }))
    expect(result.hasOwnProperty('background-image')).toBe(true)
    expect(result['background-image'].replace(/\s+/g, ' ').trim()).toEqual(
      `
      repeating-linear-gradient(
        to right, transparent, transparent 20px, ${color} 20px,
        ${color} calc(${columnWidth(Neat(), 1)} + 20px)
      )`
        .replace(/\s+/g, ' ')
        .trim()
    )
  })
  it('should return an empty object if there is no gutter', () => {
    let result = gridVisual({
      color: null,
      columns: 12,
      direction: 'ltr',
      gutter: null,
      media: null
    })
    expect(result).toEqual({})
  })
  it('should return the correct object', () => {
    let result = gridVisual(Neat())
    expect(result.hasOwnProperty('background-image')).toBe(true)
    expect(result['background-image'].replace(/\s+/g, ' ').trim()).toEqual(
      `
      repeating-linear-gradient(
        to right, transparent, transparent 20px, 20px,
        calc(${columnWidth(Neat(), 1)} + 20px)
      )`
        .replace(/\s+/g, ' ')
        .trim()
    )
  })
})
