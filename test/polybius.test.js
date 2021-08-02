const { expect } = require("chai")
const { polybius } = require("../src/polybius")

describe("polybius tests written by student", () => {
  describe("encoding", () => {
    it("should encode a message by translating each letters to number pairs", () => {
      const actual = polybius("message")
      const expected = "23513434112251"
      expect(actual).to.equal(expected)
    })
    
    it("should translate both i and j to 42", () => {
      const actual = polybius("jail")
      const expected = "42114213"
      expect(actual).to.equal(expected)
    })
    
    it("should leave spaces as is", () => {
      const actual = polybius("mess age")
      const expected = "23513434 112251"
      expect(actual).to.equal(expected)
    })
  })
  
  describe("decoding", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const actual = polybius("23513434112251", false)
      const expected = "message"
      expect(actual).to.equal(expected)
    })
    
    it("should translate 42 to both i and j", () => {
      const actual = polybius("42114213", false)
      const expected = "jail"
      expect(actual).to.include('i')
    })
    
    it("should leave spaces as is", () => {
      const actual = polybius("23513434 112251", false)
      const expected = "mess age"
      expect(actual).to.equal(expected)
    })
    
    it("should return false if the length of all numbers is odd", () => {
      const actual = polybius("2345 235134341122514", false)

      expect(actual).to.be.false
    })
  })
})