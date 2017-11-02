import format from '../src/format'
import { expect } from 'chai'

describe('format function test', () => {
    it('should return the default format date', () => {
        let date = new Date('2017-11-01').getTime()
        let result = format(date)
        expect(result).to.be.equal('2017-11-01')
    })
})