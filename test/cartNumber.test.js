import { expect } from 'chai';
import cartNumber from '../src/cartNumber';

describe('cartNumber function test', () => {
    it('should return undefined', () => {
        let result = cartNumber('abc');
        expect(result).to.equal(0);
    })

    it('should return 100', () => {
        let result = cartNumber(100);
        expect(result).to.equal(100);
    })

    it('should return 12.0万', () => {
        let result = cartNumber(120000);
        expect(result).to.equal('12万');
    })

    it('should return 1.2亿', () => {
        let result = cartNumber(120000000);
        expect(result).to.equal('1.2亿');
    })

    it('should return 1.200亿', () => {
        let result = cartNumber(120000000,3);
        expect(result).to.equal('1.2亿');
    })

    it('should return 1.211亿', () => {
        let result = cartNumber(121100000,3);
        expect(result).to.equal('1.211亿');
    })
})
