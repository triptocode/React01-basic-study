import React, { useCallback } from 'react';
import { CLICK_CELL,CHANGE_TURN } from './Ox';

const Ox2=({rowIdx, cellIdx, dispatch, cellData})=>{
  const onClickId=useCallback(()=>{
    console.log(rowIdx, cellIdx);
    // 이미 색칠된 칸이면 진행하지 않고 return시킨다.
    if(cellData){
      return;
    }
    // 칸을 클릭했을 때 이벤트를 발생시키고 (useState)
    dispatch({type:CLICK_CELL, row:rowIdx, cell:cellIdx});
    // 턴을 변경시켜준다. (useState)
    dispatch({type:CHANGE_TURN});
  }, [cellData]);	// 변경이 일어나는 부분은 []로 관리
  return(
    <td onClick={onClickId}>{cellData}</td>
  )
}
export default Ox2;