/* 
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true


*/

let canConstruct = (ransomNote, magazine) => {
  // create a empty map/obj
  // turn rans note and mag into arrays
  // create a result variable = true
  // loop through the mag and build map/obj
  // loop through note arr

  const letterMap = {};
  let result = true;
  const noteLettersArr = ransomNote.split("");
  const magazineLettersArr = magazine.split("");

  for (let letter of magazineLettersArr) {
    letterMap[letter] = letterMap[letter] + 1 || 1;
  }

  for (let letter of noteLettersArr){
    if (letterMap[letter]){
      letterMap[letter]--
      if(letterMap[letter] < 0) return false
    } else {
      return false
    }
  }
  return result;
};

console.log(canConstruct("a", "b"), false);
console.log(canConstruct("aa", "aab"), true);
