import React from "react";
import MathQuiz from "./MathQuiz"
import './App.css';



function App() {
  
  return (
    <>
      <MathQuiz/>
    </>
  );
}

export default App;







//Number.js -  useEffect() - 예제2 

// import './App.css';
// import React from 'react';
// import Number from './Number'

// function App() {
  
//   return (
//     <>
//       <Number/>
//     </>
//   );
// }

// export default App;




// UseEffect.js - useEffect() 예제1

// import './App.css';
// import React from 'react';
// import UseEffect from './UseEffect'

// function App() {
  
//   return (
//     <>
//       <UseEffect/>
//     </>
//   );
// }

// export default App;




// 하위 MemberList + CreateMember 와 상위 app.js\
// prop ,function, 이벤트 -  네이밍 방법 -  참고링크: 
// https://ellie-dev.tistory.com/13

// import React, { useRef, useState, useMemo, useCallback } from 'react';
// import MemberList from './MemberList';
// import CreateMember from './CreateMember';

//  function App() {

//   function countActiveUsers(users) {
//     console.log('활성 사용자 수를 세는중...');
//     return users.filter(user => user.active).length;
//   }


//     const [inputs, setInputs] = useState({
//       username: '',
//       email: ''
//     });
//     const { username, email } = inputs;

//     const handleInputChange = useCallback(
//         e => {
//           const { name, value } = e.target;
//           setInputs({ ...inputs, [name]: value});
//         },
//       [inputs]
//      );

  
//     const [users, setUsers] = useState([
//         { id: 1, username: 'user1',email: 'user1@gmail.com', active: true },
//         { id: 2, username: 'user2', email: 'user2@gmail.com', active: false },
//         { id: 3, username: 'user3', email: 'user3@gmail.com' , active: false }
//     ]);
//     const nextId = useRef(4);


//       // deps 에 users 가 들어있기 때문에 배열이 바뀔때마다 함수가 새로 만들어지는건, 당연합니다.
//       // 그렇다면 이걸 최적화하고 싶다면 ?
//       // 아래 화살표함수들의 deps 에서 users 를 지워서, 함수들에서 현재 useState 로 관리하는 users 를 참조하지 않게 하는것입니다

//     const handleCreateClick =  useCallback(
//       () => {
//           const user = { id: nextId.current, username, email };
         
//           setUsers(users.concat(user)); //     setUsers(users => users.concat(user));  // seUsers에 등록한 users 파라미터에서 최신users를 조회하기때문에 deps에 users 생략가능 
//           //setUsers([...users, user]);  
         
//           setInputs({ username: '', email: ''});
//           nextId.current += 1;
//       }, [users, username, email]  //[username, email] 
//       );

//       const handleDeleteClick = useCallback(id => {
//         setUsers(users.filter(user => user.id !== id)); // setUsers(users => users.filter(user => user.id !== id));
//       },  [users] //  },  []
//     );

//     const handleToggleClick = useCallback(
//       id => {
//         setUsers( //  setUsers(users =>
//             users.map( user => user.id===id?{...user, active: !user.active}:user))
//        },
//       [users]  // []
//    );

 
//   const count = useMemo(() => countActiveUsers(users), [users]);

//     return (
//       <> 
//       {/* <하위컴포넌트명 prop네임={배열명,함수명등 담는데이터} />*/}
//        <CreateMember propUsername={username} propEmail={email} onInputChange={handleInputChange} onCreateClick={handleCreateClick}/>
//        <MemberList propUsers={users} deleteClick={handleDeleteClick} toggleClick={handleToggleClick}/>
//        <div>활성사용자 수 : {count}</div>
//       </>
//     );
//   } 

//   export default App;









// - 01
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   //const text = 'JSX & React project !!'
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           first react project
//           {/* {text} */}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// 1. 프로퍼티(props)란?
//  - 상위 컴포넌트가 하위 컴포넌트에 값을 전달할때 사용한다.(단방향 데이터 흐름 갖는다.)
//  - 프로퍼티는 수정할 수 없다는 특징이 있다.(자식입장에선 읽기 전용인 데이터이다.)
// 2. props 사용방법
//  - 프로퍼티에 문자열을 전달할 때는 큰따옴표(" ")를, 문자열 외의 값을 전달할 때는 중괄호({ })를 사용 한다. 


// // - 02-1  props 예제 - Hello.js 
// import './App.css';
// import React from 'react';
// import Hello from './Hello'

// function App() {
  
//   return (
//     <>
//       <Hello name='react' color='red'/>
//       <Hello color="blue"/>
//     </>
//   );
// }

// export default App;


// - 02-2 Wrapper.js
// import './App.css';
// import React from 'react';
// import Hello from './Hello'
// import Wrapper from './Wrapper';

// function App() {
  
//   return (
//     <Wrapper>
//       <Hello name='react' color='red'/>
//       <Hello color="blue"/>
//     </Wrapper>
//   );
// }

// export default App;


// - 3 MyComponent.js
// import React from "react";
// import "./App.css";
// import MyComponent from "./MyComponent";

// function App() {
//   return <MyComponent />;
// }

// export default App;



// - 4. Counter.js
// import React from "react";
// import Counter from "./Counter";

// function App(){
//   return (
//     <Counter/>
//   )
// }

// export default App;


// 5. inputState.js
// import React from 'react';
// import InputState from './InputState';

// function App() {
//   return (
//     <InputState />
//   );
// }

// export default App;


// 6. inputState2.js

// import React from 'react';
// import InputState2 from './InputState2';

// function App() {
//   return (
//     <InputState2 />
//   );
// }

// export default App;



// 7. UseRef1.js

// import React from 'react';
// import UseRef1 from './UseRef1';

// function App() {
//   return (
//     <UseRef1/>
//   );
// }

// export default App;



// 8. ArrayRender1.js
// import React from 'react';
// import ArrayRender1 from './ArrayRender1';

// function App() {
//   return (
//     <ArrayRender1/>
//   );
// }

// export default App;


// 9. ArrayRender2.js

// import React from 'react';
// import ArrayRender2 from './ArrayRender2';

// function App() {
//   return (
//     <ArrayRender2/>
//   );
// }

// export default App;


//10-방법1.useRef 변수 - UserList1.js 하위컴포넌트에 users 배열직접작성, props사용안할때 

// import React from 'react';
// import UserList1 from './UserList1';

// function App() {
//   return (
//     <UserList1/>
//   );
// }

// export default App;


// 10-방법2. 상위컴포넌트 App.js에 users 배열작성, props로 하위UserList1.js에 users배열전달

// import React from 'react';
// import UserList1 from './UserList1';

// function App() {
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

//   return ( // users배열을 UserList1 에 props로 전달
//     <UserList1 users={users}/>
//   );
// }

// export default App;




//11.유저추가 등록, 삭제 버튼 - ArrayAdd.js 와 UserList2.js

// import React, { useRef, useState } from 'react';
// import UserList2 from './UserList2';
// import ArrayAdd from './ArrayAdd';

// function App() {
//   const [inputs, setInputs] = useState({
//                               username: '',
//                               email: ''
//                            });

//   const { username, email } = inputs;
 
//   const onChange = e => {
//       const { name, value } = e.target; // e.target,(태그)에서 name과 value가져옴
//       setInputs({
//         ...inputs,
//         [name]: value  // input name으로 username 또는 email 인데(ArrayAdd.js에 존재) 둘중 어디에 value가 입력되는지에 따라 맞춰서 setInputs 해줌 
//       });
//   };
 
//   const [users, setUsers] = useState([
//                           { id: 1, username: 'user1', email: 'user11@gmail.com'},
//                           { id: 2, username: 'user2', email: 'user22@naver.com'},
//                           { id: 3, username: 'user3', email: 'user33@gmail.com'}
//                         ]);

//   const nextId = useRef(4);
  
//   const onCreate = () => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };
    
//     // 아래 두 방식중 하나로 기존 users 유저들 배열 정보에 새로운 user를 추가 가능해짐
//     //setUsers([...users, user]);  
//     setUsers(users.concat(user)); // users (id값이 1,2,3인 기존 3명의 유저들) 에 user (새로 등록된 한명의 유저)  concat으로 연결

//     setInputs({
//       username: '',
//       email: ''
//     });

//     nextId.current += 1;
  
//   };

//   const onDelete = (id) => { 
//     setUsers(users.filter( user => user.id!==id));
//   };

//   // props 사용방법 (상위 --> 하위컴포넌트로 전달) : 
//   //  - 프로퍼티에 문자열을 전달할 때는 큰따옴표(" ")를, 문자열 외의 값을 전달할 때는 중괄호({ })를 사용
//   return (
//     <>
//       {/* 위에서 만든것을 아래2개의 컴포넌트에 props로 넣어줌 */}
//       <ArrayAdd   
//         username={username} //하위 ArrayAdd 의 input value에 props로 전달 
//         email={email} // 하위 ArrayAdd 의 input value에 props로 전달
//         onChange={onChange} // 위에서 정의한 함수를 하위 ArrayAdd에 전달
//         onCreate={onCreate} // 위에서 정의한 함수를 하위 ArrayAdd에 전달
//       />
//        {/* users 객체 통채로 props로 UserList2에 넘겨줌 */}
//       <UserList2 users={users} onRemove={onDelete}/> 
//     </>
//   );
// }

// export default App;





// import React, { useRef, useState } from 'react';
// import UserList2 from './UserList2';
// import ArrayAdd from './ArrayAdd';

// function App() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: ''
//   });
//   const { username, email } = inputs;
//   const onChange = e => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value
//     });
//   };
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com'
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com'
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com'
//     }
//   ]);

//   const nextId = useRef(4);
//   const onCreate = () => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };
//     setUsers([...users, user]);

//     setInputs({
//       username: '',
//       email: ''
//     });
//     nextId.current += 1;
//   };

//   const onDelete = id => {
//     // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
//     // = user.id 가 id 인 것을 제거함
//     setUsers(users.filter(user => user.id !== id));
//   };


//   return (
//     <>
//       <ArrayAdd
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList2 users={users} rmvKey={onDelete}/>
//     </>
//   );
// }

// export default App;









