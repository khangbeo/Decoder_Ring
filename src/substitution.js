// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false
    if (duplicatesPresent(alphabet)) return false
    input = input.toLowerCase()
    
    let result = ""
    let alph = createAlphObject(alphabet)
    
    if (encode) { result = encodeFuncSub(input, alph) }
    else { result = decodeFuncSub(input, alph) }

    return result
  }

  function createAlphObject(alphabet) {
    let obj = {}
    let alphabetList = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 
        'o', 'p', 'q', 'r', 's', 't', 'u', 
        'v', 'w', 'x', 'y', 'z'] 
        
    for (let i = 0; i < alphabet.length; i++) {
        obj[alphabetList[i]] = alphabet[i]
    }
    return obj 
  }

  function encodeFuncSub(input, alphabet) {
    let keys = Object.keys(alphabet)
    let values = Object.values(alphabet)
    let string = ""

    for (let i = 0; i < input.length; i++) {
        if (!input[i].match(/[a-z]/)) string += input[i]
        keys.forEach((key, index) => {
            if (input[i] === key) string += values[index]
        })
    }
    return string
  }

  function decodeFuncSub(input, alphabet) {
    let keys = Object.keys(alphabet)
    let values = Object.values(alphabet)
    let string = ""
    
    for (let i = 0; i < input.length; i++) {
        if (!input[i].match(/[a-z]/) && !(input[i] === '.')) string += input[i]
        
        values.forEach((value, index) => {
            if(input[i] === value) string += keys[index]
         
        })
    }
    return string
  }

  function duplicatesPresent(alphabet) {
    let letters = []

    for (let i = 0; i < alphabet.length; i++) {
        letters.push(alphabet[i])
    }
    letters.sort((letterA, letterB) => (letterA < letterB ? -1 : 1))
    for (let i = 0; i < letters.length; i++) {
        if(letters[i] === letters[i + 1]) return true
    }
    return false
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
