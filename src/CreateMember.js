import React from 'react';

function CreateMember({ username, email, onInputChange, onCreateClick }) {
  console.log('CreateMember Component !! ')
               
    return (
    <div>
      
        <input
          name="username"
          placeholder="계정명"
          onChange={onInputChange}
          value={username}
        />
      &nbsp;
        <input
          name="email"
          placeholder="이메일"
          onChange={onInputChange}
          value={email}
        />
        
        <button onClick={onCreateClick}>등록</button>
    
    </div>
  );
}

export default CreateMember;
// export default React.memo(CreateMember);