/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/
var a= [15,7,11,2];
var b= 9;
var rusult = twoSum(a,b);
console.log(rusult);

function twoSum(nums, target){
    var newArray = [];
    for(var i=0; i<nums.length; i++){
        //var x = nums[i];
        //console.log(i, x, nums[i], typeof(i), typeof(x), typeof(nums[i]));
     for(var j=i+1; j<nums.length; j++){
        if(nums[i] + nums[j] == target){
            newArray.push(i,j);
            //newArray.push(j);
           return newArray;
        };
     };
    };
    //console.log(typeof(x));
    //sum = sum +nums[i];
    //console.log(sum);
}


