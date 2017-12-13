import encryptPhone from '../src/encryptPhone'
import { expect } from 'chai'

describe('encryptPhone function test', () => {
    it('should return the original phone when first num is not 1', () => {
        let result = encryptPhone('32324890348')
        expect(result).to.be.a('string').equal('32324890348')
    })

    it('should return the original phone when phone length is not 11', () => {
        let result = encryptPhone('12345678')
        expect(result).to.be.a('string').equal('12345678')
    })

    it('should return the encryptic phone when phone is valid', () => {
        let result = encryptPhone('18170415420')
        expect(result).to.be.a('string').equal('181****5420')
    })
})