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



// - 02-1 Hello.js
// import logo from './logo.svg';
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
// import logo from './logo.svg';
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


//10.ArrayAdd.js

import React, { useRef, useState } from 'react';
import UserList from './UserList';
import ArrayAdd from './ArrayAdd';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'user1',
      email: 'user11@gmail.com'
    },
    {
      id: 2,
      username: 'user2',
      email: 'user22@naver.com'
    },
    {
      id: 3,
      username: 'user3',
      email: 'user33@gmail.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  return (
    <>
      <ArrayAdd
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
