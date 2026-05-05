class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = Array.from({ length: 9 }, () => new Set());
        const rows = Array.from({ length: 9 }, () => new Set());
        const squares = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const el = board[r][c];
                const squareIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                if (el === ".") continue;

                if (rows[r].has(el) || cols[c].has(el) || squares[squareIdx].has(el)) {
                    return false;
                }

                rows[r].add(el);
                cols[c].add(el);
                squares[squareIdx].add(el);
            }
        }

        return true;
    }
}
