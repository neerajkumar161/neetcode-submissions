class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // const indices = [0,0]
        for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                if(nums[i] + nums[j] == target) {
                    console.log(i, j);
                    return [i,j];
                }
            }   
        }

        return [0,0]
    }
}
