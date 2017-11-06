import Elegant from '../src/index'
import { expect } from 'chai'

describe('Elegant component test', () => {
    it('Elegant should contain function format', () => {
        expect(Elegant).to.have.property('format')
        expect(Elegant.format).to.be.an.instanceof(Function)
    })

    it('Elegant should contain function cartNumber', () => {
        expect(Elegant).to.have.property('cartNumber')
        expect(Elegant.cartNumber).to.be.an.instanceof(Function)
    })

    it('Elegant should contain function compose', () => {
        expect(Elegant).to.have.property('compose')
        expect(Elegant.compose).to.be.an.instanceof(Function)
    })

    it('Elegant should contain function curry', () => {
        expect(Elegant).to.have.property('curry')
        expect(Elegant.curry).to.be.an.instanceof(Function)
    })

    it('Elegant should contain function memorize', () => {
        expect(Elegant).to.have.property('memorize')
        expect(Elegant.memorize).to.be.an.instanceof(Function)
    })

    it('Elegant should contain function random', () => {
        expect(Elegant).to.have.property('random')
        expect(Elegant.random).to.be.an.instanceof(Function)
    })

    it('Elegant should contain function removeDuplicate', () => {
        expect(Elegant).to.have.property('removeDuplicate')
        expect(Elegant.removeDuplicate).to.be.an.instanceof(Function)
    })

    it('Elegant should contain function copy', () => {
        expect(Elegant).to.have.property('copy')
        expect(Elegant.copy).to.be.an.instanceof(Function)
    })
})
