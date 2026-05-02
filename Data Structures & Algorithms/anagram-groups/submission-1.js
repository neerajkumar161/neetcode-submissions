class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for(const s of strs) {
            const str = s.split('').sort().join('');
            if(!map[str]) {
                map[str] = [s];
            } else map[str].push(s)
        }

        return Object.values(map);
    }
}
