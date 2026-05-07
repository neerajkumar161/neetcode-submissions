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

        while(left < right) {
            const sums = numbers[left] + numbers[right];
            if(sums == target) return [left + 1, right + 1];

            if(sums > target) {
                // find in left
                right--;
            }

            if(sums < target) {
                // find in right
                left++;
            }

        }
    }
}
