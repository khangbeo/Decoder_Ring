// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const grid = {11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
                12: "f", 22: "g", 32: "h", 42: ["i","j"], 52: "k",
                     13: "l", 23: "m", 33: 'n', 43: "o", 53: "p",
                     14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
                     15: "v", 25: "w", 35: "x", 45: "y", 55: "z"}
  const keys = Object.keys(grid)
  const values = Object.values(grid)
  
  function polybius(input, encode = true) {
    input = input.toLowerCase()
    let result = ""
    
    if (encode) { result = encodeFunc(input)}
    else { result = decodeFunc(input)}
    return result
  }
  
  function encodeFunc(input) {
    let result = ""
    let inputArray = input.split("");
     input = inputArray.map((string) => {
        let lowCase = string.toLowerCase();
        if (lowCase === "i" || lowCase === "j") {
          return "42";
        }
        return lowCase;
     });
    for (let i = 0; i < input.length; i++) {
      if (!input[i].match(/[a-z]/)) { result += input[i] }
      values.forEach((value, index) => {
        if (input[i] === value[0] || input[i] === value[i]) { result += keys[index] }
      })
    }
    return result
  }
  
  function decodeFunc(input) {
    let newVar = ""
    let result = ""
    let even = isEven(input)
    if (!even) { return false }
    for (let i = 0; i < input.length; i++) {
      if (!input[i].indexOf(' ') && input[i].indexOf('.')) { result += input[i]} 
      else {
        newVar = input[i] + input[i + 1]
        i++
        if (newVar === '42') { result += "(i/j)"}
        keys.forEach((key, index) => {
          if (newVar === key && newVar != 42) {
            result += values[index]
          }
        })
      }
    }
    return result
  }
  
  function isEven(input) {
    let sum = 0
    
    for (let i = 0; i < input.length; i++) {
      if (input[i] != " ") { sum += 1}
    }
    if (sum % 2 != 0) { return false }
    else { return true }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
