class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixArr = [1];
        const suffixArr = [1];

        nums.forEach((el, idx) => {
            prefixArr.push(prefixArr[idx] * el);
        });
        for (let i = nums.length - 1; i >= 0; i--) {
            suffixArr.splice(0, 0, suffixArr[0] * nums[i]);
        }

        console.log(prefixArr, suffixArr);

        const res = [];
        prefixArr.forEach((el, idx) => {
            // if(idx == 0) return;
            res.push(prefixArr[idx] * suffixArr[idx + 1])
        });

        console.log(res);
        res.pop();
        return res;
    }
}
