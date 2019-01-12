// @flow
const gridContainer: Function = (parent: string = '&'): Object => {
  const psuedoSelector = `${parent}::after`
  return {
    [psuedoSelector]: {
      clear: 'both',
      content: '""',
      display: 'block'
    }
  }
}

export default gridContainer
