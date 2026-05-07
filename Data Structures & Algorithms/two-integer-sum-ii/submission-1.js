class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        // Binary Search
        let left = 0;
        let right = numbers.length - 1;

        let i = 0;
        while(left < right) {
            i++;
            const middle = left + (right - left) / 2;
            const sums = numbers[left] + numbers[right];
            console.log(typeof numbers[left], typeof numbers[right], left, right)
            if(sums == target) return [left + 1, right + 1];

            if(sums > target) { // 5 > 3, r = 
                // find in left
                right--;
            }

            if(sums < target) { ///
                // find in right
                left++;
            }

        }
    }
}
