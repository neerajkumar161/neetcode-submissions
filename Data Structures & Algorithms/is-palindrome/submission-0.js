class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const res  = s.toLowerCase().replace(/[^a-z0-9]/gi, '')

return res.split('').join('') == res.split('').reverse().join('');
    }
}
