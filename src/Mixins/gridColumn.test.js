import { columnWidth } from '../Functions'
import gridColumn from './gridColumn'
import Neat from '../Theme/Neat'

describe('gridColumn()', () => {
  it('should return the correct object', () => {
    const result = gridColumn(Neat(), 2)
    const calculatedWidth = columnWidth(Neat(), 2)
    expect(result).toEqual({
      width: `calc(${calculatedWidth})`,
      float: 'left',
      'margin-left': '20px'
    })
  })
  it('should return the correct object', () => {
    const result = gridColumn(Neat(), 14)
    const calculatedWidth = columnWidth(Neat(), 12)
    expect(result).toEqual({
      width: `calc(${calculatedWidth})`,
      float: 'left',
      'margin-left': '20px'
    })
  })
})
