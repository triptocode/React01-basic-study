
// //10-방법1.useRef 변수 - UserList1.js 하위컴포넌트에 users 배열직접작성, props사용안할때 

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



// 10-방법2. 상위컴포넌트 App.js에 users 배열작성, props로 하위UserList1.js에 users배열전달
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