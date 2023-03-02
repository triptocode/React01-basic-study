import React from 'react';


// 첫번째 컴포넌트 화면 : input 입력창 + 등록버튼 
function ArrayAdd({ username, email, onChange, onCreate }) {
                 //{} 값을 props로 받아와서 사용
    return (
    <div>
      
        <input
          name="username"
          placeholder="계정명"
          onChange={onChange}
          value={username}
        />
      
        <input
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
        />
        
        <button onClick={onCreate}>등록</button>
    
    </div>
  );
}

export default ArrayAdd;