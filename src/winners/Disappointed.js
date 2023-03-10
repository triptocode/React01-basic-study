import React from "react";

function Disappointed({ reload }) {
  return (
    <div className="disappointed">
      <h1>Angular won.</h1>

      <h2>How could you let this happen?</h2>
      <h2>You are a disgrace to React.</h2>

      <button style={{ padding: "0 10px" }}>
        <h3 onClick={() => reload()}>Crush Angular this time</h3>
      </button>
    </div>
  );
}

export default Disappointed;
