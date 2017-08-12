// @flow
const floatDirection: Function = (direction: string = 'ltr'): string => {
  return (direction === 'rtl') ? 'right' : 'left'
}

export default floatDirection
