class Solution {
    // passChar = '';
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ''
        strs.forEach(s => {
            str += s.split('').reverse().join('') + '\n';
        })
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = str.split('\n').map(s => {
            return s.split('').reverse().join("")
        })

        strs.pop();

        return strs;
    }
}
