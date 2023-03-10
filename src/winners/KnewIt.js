import React from "react";

function KnewIt({ reload }) {
  return (
    <div className="knewit">
      <h1>React won!</h1>

      <h2>Good Job.</h2>
      <h2>I knew you'd win!</h2>

      <button style={{ padding: "0 10px" }}>
        <h3 onClick={() => reload()}>Crush Angular Again</h3>
      </button>
    </div>
  );
}

export default KnewIt;
