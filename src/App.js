

// // // [ 클래스형 컴포넌트 ] - index.js, ClassCountner.js 
// import React from "react";
// import ClassCounter from "./ClassCounter"
// import './App.css';

// function App() {
  
//   return (
//     <>
//       <ClassCounter/>
//     </>
//   );
// }

// export default App;





// // [[[ immers 연습 ]]] 
// import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import MemberList from './MemberList';
// import CreateMember from './CreateMember';
// import produce from 'immer';

// // immer - 1. 아래의 코드는 immer 의 produce를 브라우저 개발자도구 콘솔에서 사용하기 위해 등록
// window.produce = produce;
// // immer - 2.
// // 개발자도구를 열어 콘솔탭에서
// // 아래 4개를 각각 입력하면서 immer 의 produce에 대해 알아본다.
// // produce
// // const state = { changedNum:1 , fixedNum:2};
// // const nextState = produce(state, draft => { draft.changedNum +=3})
// // nextState




// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }


// // 2. useReducer() 의 두번째 파라미터 initialState : 기존코드 useState(초기값정의) 함수를 사용한 배열2개 : inputs 배열과 users배열의 초기값을 initialState 변수에 넣어둠 
// const initialState = {
//   inputs:{ username: '', email: ''},
//   users: [ { id: 1, username: 'user1',email: 'user1@gmail.com', active: true },
//            { id: 2, username: 'user2', email: 'user2@gmail.com', active: false },
//            { id: 3, username: 'user3', email: 'user3@gmail.com' , active: false }
//          ]
// };

// // 3. useReducer() 의 첫번째 파라미터 reducer:  
// function reducer(state, action) {
//   switch (action.type) {
//       case 'CHANGE_INPUT':
//         return { ...state,
//                   inputs: { ...state.inputs, 
//                             [action.name]: action.value
//                           }
//         };
//       case 'CREATE_USER':
//         return { inputs: initialState.inputs,
//                  users: state.users.concat(action.user)   
//         };
//       case 'TOGGLE_USER':
//         return { ...state,
//                  users: state.users.map(user =>
//                       user.id === action.id ? { ...user, active: !user.active } : user
//                       )
//         };
//     case 'REMOVE_USER':
//       return {  ...state,
//                 users: state.users.filter(user => user.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

// function App() {
//   // 1-1. useReducer(reducer, initialState) 함수 : 파라미터 2개(reducer함수, 및 initialState 초기값)는 위에서 상세정의 
//   // 1-2.  const [state, dispatch] 에서 state의 초기값은 initialState로 세팅함.
//   // 1-3. dispatch함수는 action 및 action의 type 속성 데이터값을 담고있고, reducer함수를 작동시킴
//   // 1-4  reducer함수는 action을 파라미터로 받아 참조하며, state값을 업데이트 시킨다. 
//   const [state, dispatch] = useReducer(reducer, initialState); 
//   const nextId = useRef(4);

//   const { users } = state;
//   const { username, email } = state.inputs;

//   const handleInputChange  = useCallback(e => {
//     const { name, value } = e.target;
//     dispatch({
//       type: 'CHANGE_INPUT', 
//       name, 
//       value
//     });
//   }, []);

//   const handleCreateClick  = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     });
//     nextId.current += 1;
//   }, [username, email]);

//   const handleToggleClick  = useCallback(id => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     });
//   }, []);

//   const handleDeleteClick  = useCallback(id => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     });
//   }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       <CreateMember
//         username={username}
//         email={email}
//         onInputChange={handleInputChange }
//         onCreateClick={handleCreateClick }
//       />
//       <MemberList propUsers={users} toggleClick={handleToggleClick } deleteClick={handleDeleteClick } />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;













// // [[[ 커스텀 Hooks 만들기 : 반복되는 로직을 쉽게 재사용하는 방법 ]]]
// import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import MemberList from './MemberList';
// import CreateMember from './CreateMember';
// import useInputs from './hooks/useInputs';

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }

// const initialState = {
//   // 1.  useReducer 쪽에서 사용하는 inputs 를 없애고 이에 관련된 작업을 useInputs 를 대체
//   //   inputs:{ username: '', email: ''},  
//     users: [ { id: 1, username: 'user1',email: 'user1@gmail.com', active: true },
//              { id: 2, username: 'user2', email: 'user2@gmail.com', active: false },
//              { id: 3, username: 'user3', email: 'user3@gmail.com' , active: false }
//            ]
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CREATE_USER':
//       return {
//         users: state.users.concat(action.user)
//       };
//     case 'TOGGLE_USER':
//       return {
//         users: state.users.map(user =>
//           user.id === action.id ? { ...user, active: !user.active } : user
//         )
//       };
//     case 'REMOVE_USER':
//       return {
//         users: state.users.filter(user => user.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [{ username, email }, handleInputChange, reset] = useInputs({
//     username: '',
//     email: ''
//   });

//   const [state, dispatch] = useReducer(reducer, initialState);
//   const nextId = useRef(4);

//   const { users } = state;

//   const handleCreateClick = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     });

//     reset();  // 새로운 항목을 추가 할 때 input 값을 초기화해야 하므로 데이터 등록 후 reset() 을 호출
//     nextId.current += 1;
//   }, [username, email, reset]);

//   const handleToggleClick = useCallback(id => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     });
//   }, []);

//   const handleDeleteClick = useCallback(id => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     });
//   }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);
//   return (
//     <>
//        <CreateMember
//          username={username}
//          email={email}
//          onInputChange={handleInputChange }         
//          onCreateClick={handleCreateClick }
//        />
//        <MemberList propUsers={users} toggleClick={handleToggleClick } deleteClick={handleDeleteClick } />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;




// //  예제 useState  - tic tac toe 게임 
// import React from "react";
// import Board from "./Board"
// import './board.css';

// function App() {
  
//   return (
//     <Board/>
//   );
// }
// export default App;






// // 예제 useReducer() 훅 - [ tic tac toe 게임   OX ]
// import React from 'react';
// import Game from "./Game";

// function App() {
//   return (
//       <Game />
//   );
// }

// export default App;









// // [[[ useReducer()함수 연습 ]]] 
// import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import MemberList from './MemberList';
// import CreateMember from './CreateMember';



// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }


// // 2. useReducer() 의 두번째 파라미터 initialState : 기존코드 useState(초기값정의) 함수를 사용한 배열2개 : inputs 배열과 users배열의 초기값을 initialState 변수에 넣어둠 
// const initialState = {
//   inputs:{ username: '', email: ''},
//   users: [ { id: 1, username: 'user1',email: 'user1@gmail.com', active: true },
//            { id: 2, username: 'user2', email: 'user2@gmail.com', active: false },
//            { id: 3, username: 'user3', email: 'user3@gmail.com' , active: false }
//          ]
// };

// // 3. useReducer() 의 첫번째 파라미터 reducer:  
// function reducer(state, action) {
//   switch (action.type) {
//       case 'CHANGE_INPUT':
//         return { ...state,
//                   inputs: { ...state.inputs, 
//                             [action.name]: action.value
//                           }
//         };
//       case 'CREATE_USER':
//         return { inputs: initialState.inputs,
//                  users: state.users.concat(action.user)   
//         };
//       case 'TOGGLE_USER':
//         return { ...state,
//                  users: state.users.map(user =>
//                       user.id === action.id ? { ...user, active: !user.active } : user
//                       )
//         };
//     case 'REMOVE_USER':
//       return {  ...state,
//                 users: state.users.filter(user => user.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

// function App() {
//   // 1-1. useReducer(reducer, initialState) 함수 : 파라미터 2개(reducer함수, 및 initialState 초기값)는 위에서 상세정의 
//   // 1-2.  const [state, dispatch] 에서 state의 초기값은 initialState로 세팅함.
//   // 1-3. dispatch함수는 action 및 action의 type 속성 데이터값을 담고있고, reducer함수를 작동시킴
//   // 1-4  reducer함수는 action을 파라미터로 받아 참조하며, state값을 업데이트 시킨다. 
//   const [state, dispatch] = useReducer(reducer, initialState); 
//   const nextId = useRef(4);

//   const { users } = state;
//   const { username, email } = state.inputs;

//   const handleInputChange  = useCallback(e => {
//     const { name, value } = e.target;
//     dispatch({
//       type: 'CHANGE_INPUT', 
//       name, 
//       value
//     });
//   }, []);

//   const handleCreateClick  = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     });
//     nextId.current += 1;
//   }, [username, email]);

//   const handleToggleClick  = useCallback(id => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     });
//   }, []);

//   const handleDeleteClick  = useCallback(id => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     });
//   }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       <CreateMember
//         username={username}
//         email={email}
//         onInputChange={handleInputChange }
//         onCreateClick={handleCreateClick }
//       />
//       <MemberList propUsers={users} toggleClick={handleToggleClick } deleteClick={handleDeleteClick } />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;










//[[[ reducer 연습 - ReducerCounter 증감]]]
// import React from "react";
// import "./styles.css";
// import ReducerCounter from "./ReducerCounter";

// export default function App() {
//   return (
//     <div className="App">
//       <ReducerCounter step={1} min={-3} max={5} />
//       <hr />
//       <ReducerCounter step={5} min={-100} max={100} />
//     </div>
//   );
// }










// // [ MathQuiz ] - useRef, useState 연습
// import React from "react";
// import MathQuiz from "./MathQuiz"
// import './App.css';

// function App() {
  
//   return (
//     <>
//       <MathQuiz/>
//     </>
//   );
// }

// export default App;









// // [ tic tac toe with React Logo and Angualr Logo]
// import React from 'react';
// import Main from "./Main";
// import './style.css';

// function App() {
//   return (
//     <div className="app">
//       <Main />

//       {/* <footer>
//         <h5>The React Logo was acquired from the create-react-app template</h5>
//         <h5>
//           The Angular Logo was acquired from <a href="https://angular.io/presskit">here</a> and has the <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> License
//         </h5>
//       </footer> */}
//     </div>
//   );
// }

// export default App;








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



// 최적화: useCallback [deps] : 함수재사용 + useMemo : 상관없는 컴포넌트 리랜더링방지
// 하위 MemberList + CreateMember 와 상위 app.js\
// prop ,function, 이벤트 -  네이밍 방법 -  참고링크: 
// https://ellie-dev.tistory.com/13

import React, { useRef, useState, useMemo, useCallback } from 'react';
import MemberList from './MemberList';
import CreateMember from './CreateMember';

 function App() {

  function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
  }

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const handleInputChange = useCallback(
      e => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value});
      },
    [inputs] //useCallback에 [inputs]기능: 
            // [inputs]바뀔때만 handleInputChange함수가 새로만들어지게 하고, inputs에 변경이 없을때는 기존에 만든 함수 재사용하게됨
  );

  const [users, setUsers] = useState([
      { id: 1, username: 'user1',email: 'user1@gmail.com', active: true },
      { id: 2, username: 'user2', email: 'user2@gmail.com', active: false },
      { id: 3, username: 'user3', email: 'user3@gmail.com' , active: false }
  ]);

  const nextId = useRef(4);

      // deps 에 users 가 들어있기 때문에 배열이 바뀔때마다 함수가 새로 만들어지는건, 당연합니다.
      // 그렇다면 이걸 최적화하고 싶다면 ?
      // 아래 화살표함수들의 deps 에서 users 를 지워서, 함수들에서 현재 useState 로 관리하는 users 를 참조하지 않게 하는것입니다

  const handleCreateClick =  useCallback(
    () => {
        const user = { id: nextId.current, username, email };
      
        // setUsers(users.concat(user)); 
        setUsers(users => users.concat(user));  // useMemo수정1: seUsers에 등록한 users 파라미터에서 최신users를 조회하기때문에 deps에 users 생략가능 
        //setUsers([...users, user]);  
      
        setInputs({ username: '', email: ''});
        nextId.current += 1;
    }, 
    //  [users, username, email]  
      [username, email] // useMemo수정1
  );

  const handleDeleteClick = useCallback(id => {
      // setUsers(users.filter(user => user.id !== id)); 
      setUsers(users => users.filter(user => user.id !== id));   // useMemo수정2
    },  
    // [users] 
        [] // useMemo수정2  
    
  );

  const handleToggleClick = useCallback(
    id => {
      // setUsers( 
      setUsers(users =>   // useMemo수정3
          users.map( user => user.id===id?{...user, active: !user.active}:user))
      },
    // [users]  
    []  // useMemo수정2
   );

 
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <> 
    {/* <하위컴포넌트명 prop네임={배열명,함수명등 담는데이터} />*/}
      <CreateMember propUsername={username} propEmail={email} onInputChange={handleInputChange} onCreateClick={handleCreateClick}/>
      <MemberList propUsers={users} deleteClick={handleDeleteClick} toggleClick={handleToggleClick}/>
      <div>활성사용자 수 : {count}</div>
    </>
  );
} 

  export default App;









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









