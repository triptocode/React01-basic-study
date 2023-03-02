import React from 'react';

function User({a, b}) {

  return (
    <div>
     
      <b>{a.username}</b> <span>({a.email})</span> <button onClick={()=>{b(a.id)}}>삭제</button>
    </div>
  );
}

function UserList2({ users, rmvKey }) {
    console.log(users)
  return (
    <div> 
      
      유저리스트2
      {users.map( u => ( <User a={u} key={u.id} b={rmvKey}/>)
                 )
      }
      
    </div>
  );
}

export default UserList2;





// import React from 'react';

// // 두번째 컴포넌트 화면 : users 정보 목록3개 (input입력창아래 )

// function User({user, onRemove}) { //{user} 값을 props로 받아와서 사용
//     //console.log(user)
//   return (
//     <div>
//       {/* <b>, <span>, <button> 모두 인라인요소! */}
//       <b>{user.username}</b> 
//       <span>({user.email})</span>
//       <button onClick={()=>{onRemove(user.id)}}>삭제</button>
//     </div>
//   );
// }

// function UserList2({ users, onRemove }) {
//     console.log(users)
//   return (
//     <div>
//       {users.map( user => ( <User user={user} key={user.id} onRemove={onRemove}/>)
//                  )
//       }
// {/* // 앞의 user는 User 컴포넌트에 들어가는 user 인자를 의미하고, 
// // 뒤의 {user}는 users 배열의 각 원소값을 의미
// // key={user.id}삭제후 콘솔에 에러, 즉 배열 리렌더링 최적화를 위해, 각 원소들에 고유값을 key로 등록/> */}

      
//     </div>
//   );
// }

// export default UserList2;