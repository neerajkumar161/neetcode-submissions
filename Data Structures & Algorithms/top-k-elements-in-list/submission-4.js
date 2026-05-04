class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        // for(let i = 0; i < nums.length; i++) {
        //     if(!map[nums[i]]) {
        //         map[nums[i]] = 1;
        //     } else {
        //         map[nums[i]] = ++map[nums[i]]
        //     }
        // }

        // const unique = Object.keys(map);

        // const res =unique.map(el => {
        //     return { v: el, f: map[el]}
        // }).sort((a, b) => a.f - b.f).slice(0, k).map(e => +e.v);

        // console.log(res);
        // Bucket Sort solution
        for (const n of nums) {
            map[n] = map[n] ? ++map[n] : 1;
        }

        const bucketArr = [];

        Object.entries(map).map(([key, value]) => {
            if (Array.isArray(bucketArr[value])) {
                bucketArr[value].push(+key);
            } else {
                bucketArr[value] = [+key];
            }
        });

        console.log(bucketArr);

        const res = [];
        for (let i = bucketArr.length - 1; i >= 0; i--) {
            if (Array.isArray(bucketArr[i])) {
                for (let j = bucketArr[i].length - 1; j >= 0; j--) {
                    const el = bucketArr[i][j];
                    if (el !== undefined && res.length !== k) res.push(el);
                }
            }
        }

        return res;
    }
}
