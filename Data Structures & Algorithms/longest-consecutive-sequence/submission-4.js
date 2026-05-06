class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = {};
        const sets = []
        // if(nums.length == 0) return 0;
        nums.forEach(el => (map[el] = true));
        
        for(let n = 0; n < nums.length; n++) {
            const el = nums[n];
            // p exists? yes? skip iteration
            if(map[+(el - 1)]) continue;
            // p exists? , no, create set
            else sets[n] = [el];
            // n exists? , no - no continuation
            if(!map[+(el + 1)]) continue; // move to next step

            // do while (el -> n exists) -- add to set
            let i = 1;
            do {
                sets[n].push(el + i);
                i++;
            } while(map[+(el + i)])
        }

        let maxlength = 0;
        sets.forEach(s => { 
            maxlength = Math.max(s.length, maxlength)
        })

        return maxlength;

    }
}
