import gridShift from './gridShift'
import Neat from '../Theme/Neat'
import { columnWidth } from '../Functions'

describe('gridShift()', () => {
  it('should handle a shift of 0', () => {
    let result = gridShift(Neat(), 0)
    expect('left' in result).toBe(true)
    expect(result.left).toBe('20px')
  })
  it('should handle no shift', () => {
    let result = gridShift(Neat())
    expect('left' in result).toBe(true)
    expect(result.left).toBe('20px')
  })
  it('should handle a push greater than 0', () => {
    let result = gridShift(Neat(), 2)
    let calculatedWidth = columnWidth(Neat(), 2)
    expect(result['left'].trim()).toEqual(`calc(${calculatedWidth} + 20px)`)
  })
  it('should handle no direction', () => {
    let result = gridShift({
      color: null,
      columns: 12,
      direction: null,
      gutter: '20px',
      media: null
    })
    expect(result).toEqual({})
  })
  it('should handle no direction', () => {
    let result = gridShift({
      color: null,
      columns: 12,
      direction: 'ltr',
      gutter: undefined,
      media: null
    })
    expect(result).toEqual({})
  })
})
