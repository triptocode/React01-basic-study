import React from 'react';

function User({user}) { //{user} 값을 props로 받아와서 사용
    console.log(user)
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
    console.log(users)
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
// 앞의 user는 User 컴포넌트에 들어가는 user 인자를 의미하고, 
// 뒤의 {user}는 users 배열의 각 원소값을 의미
// key={user.id}삭제후 콘솔에 에러, 즉 배열 리렌더링 최적화를 위해, 각 원소들에 고유값을 key로 등록/>

      ))}
    </div>
  );
}

export default UserList;