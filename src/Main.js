import React, { useCallback, useReducer } from "react";
import Modal from "./Modal";
import Disappointed from "./winners/Disappointed";
import KnewIt from "./winners/KnewIt";
import Draw from "./winners/Draw";
let Square = React.memo(({ inside, onClick, x, y }) => {
  let click = () => {
    if (inside) return;

    onClick(x, y);
  };

  let src = "./logos/" + (inside === "A" ? "angular.svg" : "react.svg");

  return (
    <td onClick={click}>
      {inside && <img src={src} alt={inside} width={75} height={75} />}
    </td>
  );
});

let checkWinner = (board) => {
  let lines = [
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [2, 0],
      [1, 1],
      [0, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
  ];

  for (let line of lines) {
    let hs = [];
    for (let co of line) {
      let [x, y] = co;
      hs.push(board[y][x]);
    }
    let j = hs.join("");
    if (j === "AAA") return "A";
    if (j === "RRR") return "R";
  }

  // If board is filled, declare draw
  if (board.map((b) => b.join("")).join("").length === 9) {
    return "D";
  }

  return null;
};

let loc = window.location.href;
let params = new URLSearchParams(loc.slice(loc.indexOf("?")));
let first = params.get("first") || "R";

if (first === "React") first = "R";
if (first === "Angular") first = "A";

if (first !== "R" && first !== "A") {
  first = "R";
}

let getEmptyBoard = () =>
  Array(3)
    .fill(0)
    .map((e) => Array(3).fill(null));

let getDefaultState = () => ({
  board: getEmptyBoard(),
  turn: first,
  winner: null,
  draw: false,
});

let defaultState = getDefaultState();

let reducer = (state, action) => {
  switch (action.type) {
    case "move":
      if (state.winner) return state;

      let board = state.board.map((b) => b.slice());
      board[action.y][action.x] = state.turn;

      let winner = checkWinner(board);

      return {
        board,
        turn: state.turn === "A" ? "R" : "A",
        winner: winner === "D" ? null : winner,
        draw: winner === "D" ? true : false,
      };
      
    case "reload":
      return getDefaultState();
    default:
      return state;
  }
};

let Board = () => {
  let [{ board, turn, winner, draw }, dispatch] = useReducer( reducer, defaultState);

  let reload = useCallback(() => {
    dispatch({ type: "reload", });
  }, []);

  let tdClick = useCallback((x, y) => {
    dispatch({ type: "move", x, y });
  }, []);

  return (
    <>
      <div className="main">
        <table className="board">
          <tbody>
            {board.map((row, y) => (
              <tr key={y}>
                {row.map((t, x) => (
                  <Square inside={t} key={x} x={x} y={y} onClick={tdClick} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {!winner && (
          <h2>This turn is {turn === "A" ? "Angular" : "React"}'s</h2>
        )}
      </div>
      {winner && (
        <>
          <h1>Winner is {winner === "A" ? "Angular." : "React!"}</h1>
          <Modal>
            {winner === "A" && <Disappointed reload={reload} />}
            {winner === "R" && <KnewIt reload={reload} />}
          </Modal>
        </>
      )}
      {draw && (
        <Modal>
          <Draw reload={reload} />
        </Modal>
      )}
    </>
  );
};
export default Board;
