/* 
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]

--arr nums -- only nums -- duplicates allowed - 
-- return arr with missing nums

*/

function findDisappearedNumbers(nums){
    // create a map/obj
    // put each num and it's index inside the map using forEach
    // initialize a empty array var
    // loop through passed in arr
    // inside loop, check if the map does not have the number of the current index
    const map = new Map()
    nums.forEach((num, i) => map.set(num, i))

    const result = []
    for (let i = 1; i <= nums.length; i++){
        if (!map.has(i)) result.push(i)
    }
    return result
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6]);