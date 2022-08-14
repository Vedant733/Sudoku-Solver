import React from "react";
import Board from "./Board";

function App() {

  const [board, setBoard] = React.useState([
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ])

  const solveSudoku = () => {
    const rows = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],]
      , cols = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],]
      , box = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],]
      , dummyBoard = board;

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (dummyBoard[i][j].trim().length !== 0) {
          if (rows[i][parseInt(dummyBoard[i][j])] === 1 || cols[j][parseInt(dummyBoard[i][j])] === 1 || box[(parseInt(i / 3)) * 3 + parseInt(j / 3)][parseInt(dummyBoard[i][j])] === 1) {
            alert("Input Error")
            return
          }
          rows[i][parseInt(dummyBoard[i][j])] = 1;
          cols[j][parseInt(dummyBoard[i][j])] = 1;
          box[(parseInt(i / 3)) * 3 + parseInt(j / 3)][parseInt(dummyBoard[i][j])] = 1;
        }
      }
    }

    if (solve(rows, cols, box, 0, 0, dummyBoard)) setBoard([...dummyBoard])
    else alert("Input Error")
  }

  const solve = (rows, cols, box, i, j, dummyBoard) => {
    if (i === 9) return true;
    if (j === 9) return solve(rows, cols, box, i + 1, 0, dummyBoard);
    if (dummyBoard[i][j].trim().length !== 0) return solve(rows, cols, box, i, j + 1, dummyBoard);
    for (let k = 1; k <= 9; k++) {
      if (rows[i][k] === 0 && cols[j][k] === 0 && box[(parseInt(i / 3)) * 3 + parseInt(j / 3)][k] === 0) {
        rows[i][k]++;
        cols[j][k]++;
        box[(parseInt(i / 3)) * 3 + parseInt(j / 3)][k]++;
        dummyBoard[i][j] = `${k}`;
        if (solve(rows, cols, box, i, j + 1, dummyBoard)) return true;
        dummyBoard[i][j] = "";
        rows[i][k]--;
        cols[j][k]--;
        box[(parseInt(i / 3)) * 3 + parseInt(j / 3)][k]--;
      }
    }
    return false;
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Sudoku Solver</h1>
      <div style={{ display: 'flex', height: '80vh', justifyContent: 'center', alignItems: 'center' }}>
        <Board board={board} setBoard={setBoard} />
        <button style={{ padding: 10, fontSize: '20px', background: '#007aff', border: 'none', cursor: 'pointer', margin: '1em' }} onClick={solveSudoku}>Solve</button>
        <button style={{ padding: 10, fontSize: '20px', background: '#007aff', border: 'none', cursor: 'pointer' }} onClick={() => setBoard([
          ["", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", ""],
        ])}>Reset</button>
      </div>
    </>
  );
}

export default App;
