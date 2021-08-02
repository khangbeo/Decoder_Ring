// Write your tests here!
const { expect } = require("chai");
const { caesar } = require('../src/caesar.js')

describe("caesar tests written by student", () => {
    describe('error handling', () => {
        it('should return false if the shift amount is 0', () => {
            const actual = caesar('message', 0)
            const expected = false
            expect(actual).to.eql(expected);
        })
        it('should return false if the shift amount is above 25', () => {
            const actual = caesar('message', 99)
            const expected = false
            expect(actual).to.eql(expected);
        })
        it('should return false if the shift amount is above 25', () => {
            const actual = caesar('message', -99)
            const expected = false
            expect(actual).to.eql(expected);
        })
    })
    describe('encoding a message', () => {
        it('should encode a message by shifting the letters', () => {
            const actual = caesar('message', 4)
            const expected = 'qiwweki'
            expect(actual).to.eql(expected);
        })
        it('should leaves spaces and other symbols as is', () => {
            const actual = caesar('m e!s?s.a g e', 4)
            const expected = 'q i!w?w.e k i'
            expect(actual).to.eql(expected);
        })
        it('should ignore capital letters', () => {
            const actual = caesar('MESSAGE', 4)
            const expected = 'qiwweki'
            expect(actual).to.eql(expected);
        })
        it('should appropriately handle letters at the end of the alphabet', () => {
            const actual = caesar('abc xyz', 4)
            const expected = 'efg bcd'
            expect(actual).to.eql(expected);
        })
        it('should allow for a negative shift that will shift to the left', () => {
            const actual = caesar('message', -4)
            const expected = 'iaoowca'
            expect(actual).to.eql(expected);
        })
    })
    describe('decoding a message', () => {
        it('should decode a message by by shifting the letters in the opposite direction', () => {
            const actual = caesar('message', 4, false)
            const expected = 'iaoowca'
            expect(actual).to.eql(expected);
        })
        it('should leaves spaces and other symbols as is', () => {
            const actual = caesar('m e!s?s.a g e', 4, false)
            const expected = 'i a!o?o.w c a'
            expect(actual).to.eql(expected);
        })
        it('should ignore capital letters', () => {
            const actual = caesar('MESSAGE', 4, false)
            const expected = 'iaoowca'
            expect(actual).to.eql(expected);
        })
        it('should appropriately handle letters at the end of the alphabet', () => {
            const actual = caesar('abc xyz', 4, false)
            const expected = 'wxy tuv'
            expect(actual).to.eql(expected);
        })
        it('should allow for a negative shift that will shift to the right', () => {
            const actual = caesar('message', -4, false)
            const expected = 'qiwweki'
            expect(actual).to.eql(expected);
        })
    })  
})