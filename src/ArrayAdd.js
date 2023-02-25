import React from 'react';

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