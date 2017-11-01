import Elegant from '../src/index'
import { expect } from 'chai'

describe('Elegant component test', () => {
    it('Elegant should contain function format', () => {
        expect(Elegant).to.have.property('format')
        expect(Elegant.format).to.be.an.instanceof(Function)
    })
})
