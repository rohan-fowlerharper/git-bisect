const { add, subtract, multiply, divide } = require('./index')

describe('make sure all functions are working as expected', () => {
  test('a + b', () => {
    expect(add(1, 2)).toBe(3)
  })

  test('a - b', () => {
    expect(subtract(6, 3)).toBe(3)
  })

  test('a * b', () => {
    expect(multiply(86, 3)).toBe(258)
  })

  test('a / b', () => {
    expect(divide(15, 3)).toBe(5)
  })
})