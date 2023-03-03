import React from 'react';

function User({a, onDeleteClick}) {

  return (
    <div>
      <b>{a.username}</b> <span>({a.email})</span>
      <button onClick={()=>{onDeleteClick(a.id)}}>삭제</button>
    </div>
  );
}

function MemberList({ usersProp, handleDelete }) {
  return (
    <div> 
      
      {usersProp.map( u => ( <User a={u} key={u.id} onDeleteClick={handleDelete}/>) )
      }
      
    </div>
  );
}

export default MemberList;


