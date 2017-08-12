// @flow
const stripUnit: Function = (value: string): number | string => {
  const unitlessValue = parseFloat(value)
  if (isNaN(unitlessValue)) return value
  return unitlessValue
}

export default stripUnit
