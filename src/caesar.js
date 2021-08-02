// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    
    if (!shift || shift ===0 || shift < -25 || shift > 25){
      return false
    }
    
    let letters = []
    for (let i = 0; i < 26; i++){
      letters.push(String.fromCharCode(97+i))
    }
    
    return input.split('').map((char) => {
      if (letters.includes(char.toLowerCase()) && encode) {
        return String.fromCharCode(((char.toLowerCase().charCodeAt()+shift-97)%26+26)%26+97)
      } else if (letters.includes(char.toLowerCase()) && !encode) {
          return String.fromCharCode(((char.toLowerCase().charCodeAt()-shift-97)%26+26)%26+97)
        } else { return char }
    }).join('')
  } 

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
