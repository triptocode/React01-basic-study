import React from 'react';

function User({a, onDeleteClick, onToggleClick}) {

  return (
    <div>
      <b style={{cursor: 'pointer', color: a.active?'red':'black'}} onClick={ ()=>{onToggleClick(a.id)}}> 
           {a.username}
      </b> 
      <span>({a.email})</span>
      <button onClick={()=>{onDeleteClick(a.id)}}>삭제</button>
    </div>
  );
}

function MemberList({ usersProp, deleteClick, toggleClick }) {
  return (
    <div> 
              {/* User user 를 User a로 변경하고 테스트!  */}
      {/* 1. 화살표함수 {return } 작성한 경우 */}
      {/* {usersProp.map( u => { return ( <User a={u} key={u.id} onDeleteClick={deleteClick} onToggleClick = {toggleClick} />) } )
      } */}
      {/* 2. 화살표함수 리턴이 한줄이면 아래처럼 {return } 생략가능 */}
      {usersProp.map( u =>  ( <User a={u} key={u.id} onDeleteClick={deleteClick} onToggleClick = {toggleClick} />) )
      }
      
    </div>
  );
}

export default MemberList;


