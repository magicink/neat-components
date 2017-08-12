// @flow
const floatOppositeDirection: Function = (direction: string = 'ltr'): ?string => {
  if (direction === 'ltr') {
    return 'right'
  }
  if (direction === 'rtl') {
    return 'left'
  }
}

export default floatOppositeDirection
