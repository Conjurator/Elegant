import format from '../src/format'
import { expect } from 'chai'

describe('format function test', () => {
    it('should throw the error when time is not given', () => {
        let result = format()
        expect(result).to.be.an('error')
        expect(result).to.have.property('message', 'the time param must be given')
    })

    it('should throw the error when timestamp is invalid', () => {
        let result = format('s')
        expect(result).to.be.an('error')
        expect(result).to.have.property('message', 'the time you give is not a valid timestamp')
    })

    it('should return the value with default format yyyy-mm-dd', () => {
        let time = new Date('2017-11-01').getTime()
        let result = format(time)
        expect(result).to.be.equal('2017-11-01')
    })

    it('should return the value with month and day', () => {
        let time = new Date('2017-11-01').getTime()
        let result = format(time, 'mm/dd')
        expect(result).to.be.equal('11/01')
    })

    it('should return the value with minute and second', () => {
        let time = new Date('2017-11-01').getTime()
        let result = format(time, 'mm/ss')
        expect(result).to.be.equal('00/00')
    })

    it('should return the month when format is only mm or m', () => {
        let time = new Date('2017-11-01').getTime()
        let result = format(time, 'mm')
        expect(result).to.be.equal('11')
    })
})
