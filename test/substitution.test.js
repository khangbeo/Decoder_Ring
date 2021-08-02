const { expect } = require("chai")
const { substitution } = require("../src/substitution")

describe("substitution tests written by student", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const actual = substitution("message")
      expect(actual).to.be.false
    })
    
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const actual = substitution("message", "short")
      expect(actual).to.be.false
    })
    
    it("should return false if the substition alphabet does not contain unique characters", () => {
      const actual = substitution("message", "borkborkborkborkborkborkbo")
      expect(actual).to.be.false
    })
  })
  
  describe("encoding", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
      const expected = "jrufscpw"
      expect(actual).to.equal(expected)
    })
    
    it("should work with any kind of key with unique characters", () => {
      const actual = substitution("message", ".waeszrdxtfcygvuhbijnokmpl")
      const expected = "ysii.rs"
      expect(actual).to.equal(expected)
    })
    
    it("should preserve spaces", () => {
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
      const expected = "elp xhm xf mbymwwmfj dne"
      expect(actual).to.equal(expected)
    })
  })
  
  describe("decoding", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
      const expected = "thinkful"
      expect(actual).to.equal(expected)
    })
    
    it("should work with any kind of key with unique characters", () => {
      const actual = substitution("ysii.rs", ".waeszrdxtfcygvuhbijnokmpl", false)
      const expected = "message"
      expect(actual).to.equal(expected)
    })
    
    it("should preserve spaces", () => {
      const actual = substitution("ysii .rs", ".waeszrdxtfcygvuhbijnokmpl", false)
      const expected = "mess age"
      expect(actual).to.equal(expected)
    })
  })
})