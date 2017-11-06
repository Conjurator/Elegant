import removeDuplicate from '../src/removeDuplicate'
import { expect } from 'chai'

describe('removeDuplicate function test', () => {
    it('should throw error when arr is not arr', () => {
        let arr = ''
        expect(removeDuplicate(arr)).to.be.an('error')
    })

    it('should return a empty array', () => {
        let result = removeDuplicate()
        expect(result).to.be.an('array').with.lengthOf(0)
    })

    it('should return the has one duplicate element array with non-strict mode', () => {
        let result = removeDuplicate([1, 2, 3, 2, '1', 4, '2', 2, 4])
        expect(result).to.be.an('array').with.lengthOf(4)
    })

    it('should return the has none duplicate element array with non-strict mode', () => {
        let result = removeDuplicate([1, 2, 3, 2, '1', 4, '2', 2, 4], {deleteAll: true})
        expect(result).to.be.an('array').with.lengthOf(1)
    })

    it('should return the has one duplicate element array with strict mode', () => {
        let result = removeDuplicate([1, 2, 3, 2, '1', 4, '2', 2, 4], {strict: true})
        expect(result).to.be.an('array').with.lengthOf(6)
    })

    it('should return the has none duplicate element array with strict mode', () => {
        let result = removeDuplicate([1, 2, 3, 2, '1', 4, '2', 2, 4], {deleteAll: true, strict: true})
        expect(result).to.be.an('array').with.lengthOf(4)
    })
})