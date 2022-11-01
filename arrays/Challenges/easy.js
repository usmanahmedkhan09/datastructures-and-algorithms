/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

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
 Output: [0,1]     */

function sum(nums, target)
{
    let map = new Map();
    let j = nums.findIndex((a, i) => map.has(target - a) || map.set(a, i) && 0)
    return [map.get(target - nums[j]), j]

}

sum([3, 2, 4], 6);


/* 
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores). */


function removeDuplicates(nums)
{
    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] == nums[i + 1])
        {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};

removeDuplicates([1, 1, 2]);

/* 

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/


function removeElement(nums, val)
{
    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] == val)
        {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};

removeElement([3, 2, 2, 3], 3);


/* 

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

*/

function searchInsertPos(nums, target)
{
    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] < target)
        {
            continue
        }
        return i;
    }
    return nums.length
};

searchInsertPos([1, 3, 5, 6], 5)

/* 
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:
Input: digits = [9,9,9]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 999 + 1 = 1000.
Thus, the result should be [1,0,0,0].
*/

function plusOne(digits)
{
    /*  
        return (BigInt(digits.join('')) + 1n).toString().split('')
    */

    if (!digits.length) return [1]
    const init = digits.slice(0, -1)
    const last = digits.slice(-1);
    return last == 9 ? [...plusOne(init), 0] : [...init, +last + 1]
}

plusOne([1, 2, 3])

/** 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

*/
function mergeArrays(num1, num2)
{
    let length = num1.length + num2.length
    let index = 0
    for (let i = 0; i < length; i++)
    {
        if (num1[i] > num2[index])
        {
            let temp = num1[i]
            num1[i] = num2[index]
            num1[i + 1] = temp
            index++;
        } else if (num1[i] == 0)
        {
            num1[i] = num2[index]
            index++
        }

    }
    console.log(num1)
}

mergeArrays([1, 2, 3, 0, 0, 0], [2, 5, 6])