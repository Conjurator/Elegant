import { expect, assert } from 'chai';
import curry from '../src/curry';

const add = (x, y) => x + y;

describe('curry function test', () => {
    it('should return 5', () => {
        let curriedFunc = curry(add);
        let add2 = curriedFunc(2);
        let result = add2(3)
        assert.isFunction(curriedFunc);
        assert.isFunction(add2);
        expect(result).to.equal(5);
    })
})
