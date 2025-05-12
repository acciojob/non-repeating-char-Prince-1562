function firstNonRepeatedChar(str) {
  
  const frequencyMap = {};

  
  for (let char of str) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  
  for (let char of str) {
    if (frequencyMap[char] === 1) {
      return char;
    }
  }

  
  return null;
}


console.log(firstNonRepeatedChar('aabbcdd'));  
console.log(firstNonRepeatedChar('aabbcc'));   
console.log(firstNonRepeatedChar('abc'));      
console.log(firstNonRepeatedChar(''));         
