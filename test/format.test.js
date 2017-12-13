import format from '../src/format'
import { expect } from 'chai'

describe('formatDate function test', () => {
    it('should throw the error when time is not given', () => {
        let result = format.formatDate()
        expect(result).to.be.an('error')
        expect(result).to.have.property('message', 'the time param must be given')
    })

    it('should throw the error when timestamp is invalid', () => {
        let result = format.formatDate('s')
        expect(result).to.be.an('error')
        expect(result).to.have.property('message', 'the time you give is not a valid timestamp')
    })

    it('should return the value with default format yyyy-mm-dd', () => {
        let time = new Date('2017-11-01').getTime()
        let result = format.formatDate(time)
        expect(result).to.be.equal('2017-11-01')
    })

    it('should return the value with month and day', () => {
        let time = new Date('2017-11-01').getTime()
        let result = format.formatDate(time, 'mm/dd')
        expect(result).to.be.equal('11/01')
    })

    it('should return the value with minute and second', () => {
        let time = new Date('2017-11-01').getTime()
        let result = format.formatDate(time, 'mm/ss')
        expect(result).to.be.equal('00/00')
    })

    it('should return the month when format is only mm or m', () => {
        let time = new Date('2017-11-01').getTime()
        let result = format.formatDate(time, 'mm')
        expect(result).to.be.equal('11')
    })
})

describe('formatSize function test', () => {
    it('should be return the empty string', () => {
        let result = format.formatSize(0)
        expect(result).to.be.a('string').equal('')
    })

    it('should return the unit of K', () => {
        let result = format.formatSize(1100)
        expect(result).to.be.a('string').equal('1K')
    })

    it('should return the unit of M', () => {
        let result = format.formatSize(1024 * 1024)
        expect(result).to.be.a('string').equal('1M')
    })
})
