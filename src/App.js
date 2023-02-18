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
import React from "react";
import Counter from "./Counter";

function App(){
  return (
    <Counter/>
  )
}

export default App;
