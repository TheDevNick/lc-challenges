/* 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

function findDuplicates(arr) {
  // loop through arr and save each num in a map
//  if num is in map return true else set num to be true inside map
  let numMap = {};

for (const num of arr){
    if (numMap[num]){
        return true
    } else {
        numMap[num] = true
    }
}
  return false;
}

console.log(findDuplicates([1, 2, 3,3 ]), false);
