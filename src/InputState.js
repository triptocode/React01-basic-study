import React, { useState } from 'react';

function InputState() {
  const [text, setText] = useState(''); // useState('initalValue')
  const onChange = (evt) => {   // evt는 SyntheticEvent ! 
    setText(evt.target.value);
    //console.log(evt); // evt는 SyntheticEvent ! 
    //console.log(evt.target); // 
  };
  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}  />
      <button onClick={onReset}>초기화</button> 
      <div>
        <b> 입력한 내용: {text}</b>
      </div>
    </div>
  );

}

export default InputState;