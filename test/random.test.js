import { expect, assert } from 'chai';
import random from '../src/random';

describe('random function test', () => {
    it('should return value between 100 to 500', () => {
        let result = random(100, 500);
        expect(result).to.be.above(100);
        expect(result).to.be.below(500);
    })

    it('should return value between 100 to 500, change arguments order', () => {
        let result = random(500, 100);
        expect(result).to.be.above(100);
        expect(result).to.be.below(500);
    })
})
