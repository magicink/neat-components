import gridPush from './gridPush'
import Neat from '../Theme/Neat'
import { columnWidth } from '../Functions'

describe('gridPush()', () => {
  it('should should handle a push of 0', () => {
    let result = gridPush(Neat(), 0)
    expect('margin-left' in result).toBe(true)
    expect(result['margin-left']).toBe('20px')
  })
  it('should should handle no push', () => {
    let result = gridPush(Neat())
    expect('margin-left' in result).toBe(true)
    expect(result['margin-left']).toBe('20px')
  })
  it('should handle a push greater than 0', () => {
    let result = gridPush(Neat(), 2)
    let calculatedWidth = columnWidth(Neat(), 2)
    expect(result['margin-left'].trim()).toEqual(`calc(${calculatedWidth} + 40px)`)
  })
})
