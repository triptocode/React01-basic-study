import logo from './logo.svg';
import './App.css';

function App() {
  //const text = 'JSX & React project !!'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          first react project
          {/* {text} */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import Hello from './Hello'

// function App() {
  
//   return (
//     <Hello name='react' color='red'/>
//   );
// }

// export default App;