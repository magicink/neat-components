import Neat from './Neat'
import { Directions } from './NeatTheme'

describe('Neat', () => {
  describe('constructor', () => {
    it('should return the default values', () => {
      const result = {
        ...new Neat()
      }
      expect(result.color).toBe(null)
      expect(result.columns).toBe(12)
      expect(result.direction).toBe(Directions.LTR)
      expect(result.gutter).toBe('20px')
      expect(result.media).toBe(null)
    })
    it('should return a mix of default values with custom values', () => {
      const result = {
        ...new Neat({
          color: 'blue',
          media: 1000,
          gutter: '10px'
        })
      }
      expect(result.color).toBe('blue')
      expect(result.columns).toBe(12)
      expect(result.direction).toBe(Directions.LTR)
      expect(result.gutter).toBe('10px')
      expect(result.media).toBe(1000)
    })
    it('should handle a direction of "ltr" correctly', () => {
      const result = {
        ...new Neat({
          direction: Directions.LTR
        })
      }
      expect(result.direction).toBe(Directions.LTR)
    })
    it('should handle a direction of "rtl" correctly', () => {
      const result = {
        ...new Neat({
          direction: Directions.RTL
        })
      }
      expect(result.direction).toBe(Directions.RTL)
    })
    it('should handle a number direction correctly', () => {
      const result = {
        ...new Neat({
          direction: 1
        })
      }
      expect(result.direction).toBe(Directions.LTR)
    })
  })
})
