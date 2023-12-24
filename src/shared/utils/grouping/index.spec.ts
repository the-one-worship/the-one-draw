import grouping from '.'

const source = [1, 2, 3, 4, 5]

const expectResult: Record<number, Array<Array<number>>> = {
  1: [[1, 2, 3, 4, 5]],
  2: [
    [1, 3, 5],
    [2, 4],
  ],
  3: [[1, 4], [2, 5], [3]],
  4: [[1, 5], [2], [3], [4]],
  5: [[1], [2], [3], [4], [5]],
}

describe('grouping', () => {
  source.forEach(item => {
    describe(`${item} groups`, () => {
      it('is correct', () => {
        expect(grouping(source, item)).toEqual(expectResult[item])
      })
    })
  })
})
