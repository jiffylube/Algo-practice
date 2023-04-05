// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

let board = 
  [["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// Output: false

let isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    let row = new Set();
    for (let j = 0; j < board[i].length; j++){
      // try to add to set, if there is duplicate, then return false
      if (row.has(board[i][j])) {
        console.log(board[i][j] + " is already in the set")
        return false
      }
      else if (board[i][j] !== ".") {
        row.add(board[i][j])
      }
    }
  }

  for (let i = 0; i < board.length; i++){
    let column = new Set()
    for (let j = 0; j < board[i].length; j++){
      // console.log(board[j][i])
      if (column.has(board[j][i])) {
        console.log(board[j][i] + " is already in the set")
        return false
      }
      else if (board[j][i] !== ".") {
        column.add(board[j][i])
      }
    }
  }

  // 3x3 grid checking

  for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){

      // grid inside the 3x3
      let grid = new Set()
      for (let k = 0; k < 3; k++){
        for (let l = 0; l < 3; l++){
          let cell = board[3 * i + k][3 * j + l]
          // console.log(cell)

          if (grid.has(cell)) {
            console.log(cell + " is already in the set")
            return false
          }
          else if (cell !== ".") {
            grid.add(cell)
          }
        }
      }

    }
  }
  
return true

}

isValidSudoku(board);