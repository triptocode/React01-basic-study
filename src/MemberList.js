import React from 'react';

function User({a, onRemove}) {

  return (
    <div>
      <b>{a.username}</b> <span>({a.email})</span>
      <button onClick={()=>{onRemove(a.id)}}>삭제</button>
    </div>
  );
}

function MemberList({ usersProp, onRemove }) {
  return (
    <div> 
      
      {usersProp.map( u => ( <User a={u} key={u.id} onRemove={onRemove}/>) )
      }
      
    </div>
  );
}

export default MemberList;


