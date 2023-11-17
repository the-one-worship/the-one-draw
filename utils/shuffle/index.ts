import cloneDeep from 'lodash/fp/cloneDeep'

export default function shuffle<T>(array: T[]) {
  const arrCopy = cloneDeep(array)
  arrCopy.sort(() => Math.random() - 0.5)
  return arrCopy
}
