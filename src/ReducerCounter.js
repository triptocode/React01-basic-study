import React, { useReducer } from "react";

const initialState = { count: 0 };

// 2. reducer() : 상태업데이트 함수, dispatch 의 action type 데이터를 파라미터로 받음 
function reducer(state, action) {
    // console.log(action)
    // console.log(state)
  switch (action.type) {
    case "INCREMENT":
      return state.count < action.max
        ? { count: state.count + action.step }
        : state;
    case "DECREMENT":
      return state.count > action.min
        ? { count: state.count - action.step }
        : state;
    case "RESET":
      return initialState;
    case "RANDOM":
      return {
        count:
          Math.floor(Math.random() * (action.max - action.min)) + action.min
      };
    default:
      throw new Error("Unsupported action type:", action.type);
  }
}

function ReducerCounter({ step = 1, min = 0, max = 10 }) {
    // 1.useReducer()
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>
        증감숫자범위: {step} <br></br>최소: {min}, 최대: {max} 
        </p>
      
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT", step, max })}>
        증가
      </button>&nbsp;
      <button onClick={() => dispatch({ type: "DECREMENT", step, min })}>
        감소
      </button>&nbsp;
      <button onClick={() => dispatch({ type: "RANDOM", min, max })}>
        랜덤
      </button>&nbsp;
      <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
    </>
  );
}

export default ReducerCounter;
