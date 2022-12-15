/* 
Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

describe("Ransom Note", () => {
 it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est love", magazine), false);
 });

 -- 2 strings - magazine - ransome note -- never empty -- 
 -- return boolean
*/

const mag =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

function findRansomNote(magazine, note) {
  // create a map/obj to store all words in magazine
  // loop through magazine to add to the map
  // loop through the map
  const wordMap = {};
  const magArr = magazine.split(" ");
  const noteArr = note.split(" ");
  let result = true;

  for (let word of magArr) {
    wordMap[word] = wordMap[word] + 1 || 1;
  }

  for (let word of noteArr) {
    if (wordMap[word]) {
      wordMap[word]--
      if (wordMap[word] < 0) return false
    } else {
        return false
    }
  }

  return result;
}

console.log(findRansomNote(mag, "sit ad est sint"), true);
