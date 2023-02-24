import React, { useState } from 'react';

function InputState2() {
  const [inputs, setInputs] = useState({ //객체형태로 상태설정
    fullname: '',
    nickname: ''
  });

  const { fullname, nickname } = inputs; // 비구조화 할당을 통해 값 추출
  // 20번, 17번줄의 name이 fullname인지 nickname인지에 따라 값이 변경

  const onChange = (e) => {
    // console.log(e.target)
    // console.log(e.target.value)
    // console.log(e.target.name)

    const { name, value } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 객체상태를 업데이트할때는 기존의 inputs 객체를 복사한 뒤, 덮어쓰기를 해준다.
                 // (점을 세번붙이면 기존객체복사 spread문법)
                // 5번줄의  fullname, nickname의 현재상태의 값이 오게됨 
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