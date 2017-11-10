import { expect, assert } from 'chai';
import compose from '../src/compose';

const add = (x) => x + 4;
const mult = (x, y = x) => x * y;
const divide = (x) => x / 2;

//test (x*x + 4)/2
describe('compose function test', () => {
    it('should return 4', () => {
        let func = compose(divide, add, mult);
        let result = func(2);
        assert.isFunction(func);
        expect(result).to.equal(4);
    })
})
