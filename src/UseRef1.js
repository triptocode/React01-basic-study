import React, { useState, useRef } from 'react';

function UseRef1() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  const nameInput = useRef(); // 1. useRef() 함수 사용하여 nameInput 객체생성

  const { name, nickname } = inputs; 

  const onChange = e => {
    const { value, name } = e.target; 
    setInputs({
      ...inputs, 
      [name]: value 
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();  //3. current가 dom을 가리키게됨, focus()로 포커스설정
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}   // 2.포커스로 가리키고싶은 dom에 nameInput객체넣어서 작성 
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
        // ref={nameInput}   //  2.포커스로 가리키고싶은 dom에 nameInput객체넣어서 작성
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default UseRef1;