// @flow
const gridContainer: Function = (parent: string = '&') => {
  const psuedoSelector = `${parent}::after`
  return {
    [psuedoSelector]: {
      clear: 'both',
      content: '',
      display: 'block'
    }
  }
}

export default gridContainer
