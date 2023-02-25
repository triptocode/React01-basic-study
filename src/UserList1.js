// import React from 'react';

// function User({ user }) {
//   return (
//     <div>
//       <b>{user.username}</b> <span>({user.email})</span>
//     </div>
//   );
// }

// function UserList1() {
//   const users = [
//     {
//       id: 1,
//       username: 'user1',
//       email: 'user11@gmail.com'
//     },
//     {
//       id: 2,
//       username: 'user2',
//       email: 'user22@naver.com'
//     },
//     {
//       id: 3,
//       username: 'user3',
//       email: 'user33@gmail.com'
//     }
//   ];  
//   return (
//     <div>
//       {users.map(user => (
//         <User user={user} key={user.id} />
//       ))}
//     </div>
//   );
// }

// export default UserList1;



// 방법2. App.js 에서 users 배열을 이동시키고, props로 받아온다.
import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList1({users}) {
 
    return (
      <div>
        {
        users.map(
            user => (<User user={user} key={user.id} />))
        }
     </div>
    );
}

export default UserList1;