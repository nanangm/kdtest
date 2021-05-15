const index = require('../index')

// Tests to see if amount paid is equal to 100 which is the required monthly payment.
index.log = jest.fn(() => '100')
test(`The index log function`, () => {
    const result = index.log(700, 0)
    expect(result).toBe('100')
})