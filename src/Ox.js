import React, {useReducer,useCallback } from "react";
import Ox2 from "./Ox2";

export const SET_WINNER='SET_WINNER';
export const CLICK_CELL='CLICK_CELL';
export const CHANGE_TURN='CHANGE_TURN';


const initialState={
  winner:'',
  turn:'O',
  tableData:[['','',''],['','',''],['','','']],
}

const reducer=(state, action)=>{
  switch(action.type){
    case SET_WINNER:
      return{
        ...state,
        winner:action.winner,
      };
    case CLICK_CELL:
      const tableData=[...state.tableData];
      tableData[action.row]=[...tableData[action.row]];
      tableData[action.row][action.cell]=state.turn;
      return{
        ...state,
        tableData,
      };
    case CHANGE_TURN:
      return{
        ...state,
        turn:state.turn==='O'?'X':'O',
      }
  }
}


  
const Ox=()=>{
    const [state,dispatch]=useReducer(reducer, initialState);
  
    const onClickTable=useCallback(()=>{
      dispatch({type:'SET_WINNER', winner:'O'});	// dispatch를 통해 state변경
    },[]);
    
    return(
      <>
        <Ox2 onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}/>
        {/* dispatch는 왜 생겼을까? */}
      </>
    );
  };

  export default Ox;