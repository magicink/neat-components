import { columnWidth } from '../Functions'
import gridColumn from './gridColumn'
import { NeatTheme } from '../Theme/Neat'

describe('gridColumn()', () => {
  it('should return the correct object', () => {
    const result = gridColumn(NeatTheme, 2)
    const calculatedWidth = columnWidth(NeatTheme, 2)
    expect(result).toEqual({
      width: `calc(${calculatedWidth})`,
      float: 'left',
      'margin-left': '20px'
    })
  })
  it('should return the correct object', () => {
    const result = gridColumn(NeatTheme, 14)
    const calculatedWidth = columnWidth(NeatTheme, 12)
    expect(result).toEqual({
      width: `calc(${calculatedWidth})`,
      float: 'left',
      'margin-left': '20px'
    })
  })
})
