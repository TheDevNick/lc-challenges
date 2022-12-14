/* 
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

-- arr of nums -- never be empty - always have a majority element
- return a num 

*/

function findMajorityNum(nums) {
  // create a var to hold the n.length / 2
  // create a hashmap
  // loop through the nums and add to hashmap
  // check which num in hashmap appears more than n / 2 times

  const timesAppeared = nums.length / 2;
  const map = {};

  for (const num of nums) {
    map[num] = map[num] + 1 || 1;
    if (map[num] > timesAppeared) return num;
  }

  // return nums.sort((a,b) => a - b)[Math.floor(nums.length / 2)]
}

console.log(findMajorityNum([3, 2, 3]), 3);
console.log(findMajorityNum([1, 2, 2, 2, 3]), 2);
console.log(findMajorityNum([2, 2, 1, 1, 1, 2, 2]), 2);
