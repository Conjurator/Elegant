import copy from '../src/copy'
import { expect } from 'chai'

describe('copy function test', () => {
    it('should return the source when source is not an array or object', () => {
        let result = copy('')
        expect(result).to.be.a('string').equal('')
    })

    it('should return the shallow copy result', () => {
        let source = {
            name: 'sujunfei',
            tags: ['Elegant', 'test']
        }

        let result = copy(source)
        expect(result).to.have.property('name', 'sujunfei')
        expect(result).to.have.property('tags')
        expect(result.tags).to.be.an('array').equal(source.tags)
    })

    it('should return the deep copy result', () => {
        let source = {
            name: 'sujunfei',
            tags: ['Elegant', 'test']
        }

        let result = copy(source, true)
        expect(result).to.have.property('name', 'sujunfei')
        expect(result).to.have.property('tags')
        expect(result.tags).to.be.an('array').not.equal(source.tags)
    })

    it('should skip the circulate recursion', () => {
        let otherObj = {
            test: testObj
        }

        let testObj = {
            name: 'test',
            arr: [1, 2, 3],
            other: otherObj
        }

        let result = copy(testObj, true)
        expect(result).to.have.property('other')
        expect(result.other).to.be.an('object').have.property('test', undefined)
    })
})