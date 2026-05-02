class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};
        let returnValue = false;
        for (let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                if(nums[i] == nums[j]) {
                    returnValue = true;
                    break;
                }
            }
            // if (!map[nums[i]]) {
            //     map[nums[i]] = 1;
            // } else {
            //     returnValue = true;
            //     break;
            // }
        }

        return returnValue;
    }
}
