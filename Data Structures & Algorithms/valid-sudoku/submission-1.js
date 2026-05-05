class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    //  Map of 9 sets

    const squares = {}; // Array.from({ length: 9 }, () => new Set()); {}

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const v = board[r][c];
        if (v === ".") continue;

        // const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        const boxIndex = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

        if (
          rows[r].has(v) ||
          cols[c].has(v) ||
          squares[boxIndex] && squares[boxIndex].has(v)
        ) {
          return false;
        }

        rows[r].add(v);
        cols[c].add(v);
        if (squares[boxIndex]) {
          squares[boxIndex].add(v);
        } else {
          squares[boxIndex] = new Set([v]);
        }
      }
    }

    return true;
  }
}