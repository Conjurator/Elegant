import { expect, assert } from 'chai';
import memorize from '../src/memorize';


// define the function which will be memorized
const fab =
    (n) => {
        if(n < 2) {
            return n;
        }
        return fab(n-1) + fab(n-2);
    }
describe('memorized function test', () => {
    it('first calc store the value', () => {
        let func = memorize(fab);
        let result = func(30);
        assert.isFunction(func);
        expect(result).to.equal(832040);
    })

    it('second calc return cache value', () => {
        let result = memorize(fab)(30);
        expect(result).to.equal(832040);
    })
})
