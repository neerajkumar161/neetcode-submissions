class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for(let i = 0; i < nums.length; i++) {
            if(!map[nums[i]]) {
                map[nums[i]] = 1;
            } else {
                map[nums[i]] = ++map[nums[i]]
            }
        }
        
        const unique = Object.keys(map);

        const res =unique.map(el => {
            return { v: el, f: map[el]}
        }).sort((a, b) => a.f > b.f ? -1 : 1).slice(0, k).map(e => +e.v);

        console.log(res);

        return res
    }
}
