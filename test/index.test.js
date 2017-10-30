const test = require('../src/index')
const expect = require('chai').expect

describe('test', () => {
    it('should return false', () => {
        let result = test(1, 2)
        expect(result).to.equal(false)
    })
})