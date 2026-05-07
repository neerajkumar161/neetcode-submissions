class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const res = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
        let left = 0;
        let right = res.length - 1;
        while (left < right) {
            if (res[left] !== res[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
        // return res.split('').join('') == res.split('').reverse().join('');
    }
}
