module.exports = function solveSudoku(matrix) {

  for (let row = 0; row < 9; row += 1) {
    for (let column = 0; column < 9; column += 1) {
      if (matrix[row][column] == 0) {
        for (let currentNumber = 1; currentNumber <= 9; currentNumber += 1){
          if (checkPosition(row, column, currentNumber)) {
            matrix[row][column] = currentNumber;
            if (solveSudoku(matrix))  {
              return matrix;
            }
            else {
              matrix[row][column] = 0;
            }
          }
        }
        return false;
      }
    }
  }

  function checkRow(row, currentNumber) {
    for (let r = 0; r < 9; r += 1) {
      if (matrix[row][r] == currentNumber) {
        return false;
      }
    }
    return true;
  }

  function checkColumn(column, currentNumber) {
    for (let c = 0; c < 9; c += 1) {
      if (matrix[c][column] == currentNumber) {
        return false;
      }
    }
    return true;
  }

  function checkSquare(row, column, currentNumber) {
    let rows = Math.floor(row / 3) * 3;
    let columns = Math.floor(column / 3) * 3;
    for (let r = 0; r < 3; r += 1) {
      for (let c = 0; c < 3; c += 1) {
        if (matrix[rows + r][columns + c] == currentNumber) {
          return false;
        }
      }
    }
    return true;
  }

  function checkPosition(row, column, currentNumber) {
    return (
            checkRow(row, currentNumber) && 
            checkColumn(column, currentNumber) && 
            checkSquare(row, column, currentNumber)
    );
  }

  return matrix;
}
