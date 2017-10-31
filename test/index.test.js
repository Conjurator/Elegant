// const test = require('../src/index')
import { expect } from 'chai';
import test from '../src/index';

describe('test', () => {
    it('should return false', () => {
        let result = test(1, 2)
        expect(result).to.equal(false)
    })
})
