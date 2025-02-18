/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let reduceNum = init
    for(let i = 0; i < nums.length; i++) {
        reduceNum = fn(reduceNum, nums[i])
    }
    return reduceNum
};