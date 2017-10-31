// const test = require('../src/index')
import { expect } from 'chai';
import cartNumber from '../src/cartNumber';

describe('cartNumber function test', () => {
    it('should return 100', () => {
        let result = cartNumber(100)
        expect(result).to.equal(100)
    })
})
