import copy from '../src/copy'
import { expect } from 'chai'

describe('copy function test', () => {
    it('should throw an error when source is not an array or object', () => {
        let result = copy('')
        expect(result).to.be.an('error')
        expect(result).to.have.property('message', 'source must be an object or an array')
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
})