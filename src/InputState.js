import React, { useState } from 'react';

function InputState() {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
    //console.log(e); // e는 SyntheticzEvent ! 
    //console.log(e.target); // 
  };
  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}  />
      <button onClick={onReset}>초기화</button> 
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );

}

export default InputState;