import Neat, {
  gridCollapse,
  gridColumn,
  gridContainer,
  gridMedia,
  gridPush,
  gridShift,
  gridVisual
} from './'

describe('API', () => {
  it('should export the API correctly', () => {
    expect(typeof Neat).toBe('function')
    expect(typeof gridCollapse).toBe('function')
    expect(typeof gridColumn).toBe('function')
    expect(typeof gridContainer).toBe('function')
    expect(typeof gridMedia).toBe('function')
    expect(typeof gridPush).toBe('function')
    expect(typeof gridShift).toBe('function')
    expect(typeof gridVisual).toBe('function')
  })
})
