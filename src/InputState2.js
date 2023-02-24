import React, { useState } from 'react';

function InputState2() {
  const [inputs, setInputs] = useState({
    fullname: '',
    nickname: ''
  });

  const { fullname, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    console.log(e.target)
    console.log(e.target.value)
    console.log(e.target.name)

    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정, name키는 name 또는 nickname 이 될수도! 
    });
  };

  const onReset = () => {
    setInputs({
      fullname: '',
      nickname: '',
    })
  };


  return (
    <div>
      <input name="fullname" placeholder="이름" onChange={onChange} value={fullname} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>입력값: </b>
        {fullname} ({nickname})
      </div>
    </div>
  );
}

export default InputState2;