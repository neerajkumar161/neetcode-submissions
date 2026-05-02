class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        console.log(s.length);
        const map = {};
        if (s.length !== t.length) return false;
        let valueToReturn = true;

        s.split("").forEach((el) => {
            if (!map[el]) {
                map[el] = [1, 0];
                return;
            }

            // const num= map[el][0];
            // const firstEl = map[el] ?? [][0]
            // firstEl = num++
            map[el][0] = ++map[el][0];
        });

        t.split("").forEach((el) => {
            if (!map[el]) {
                map[el] = [0, 1];
                return;
            }

            // const num= map[el][0];
            // const firstEl = map[el] ?? [][0]
            // firstEl = num++
            map[el][1] = ++map[el][1];
        });

console.log(map);
        Object.values(map).forEach(el => {
            console.log(el);
            if(el[0] != el[1]) {
                valueToReturn = false;
            }
        })

        return valueToReturn;
    }
}
