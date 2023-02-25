import React from "react";


function User({ user }) {
    return (
      <div>
        <b>{user.username}</b> <span>({user.email})</span>
      </div>
    );
  }


 function ArrayRender2(){
    const users = [
        {
          id: 1,
          username: 'user11',
          email: 'user11@gmail.com'
        },
        {
          id: 2,
          username: 'user22',
          email: 'user22@naver.com'
        },
        {
          id: 3,
          username: 'user33',
          email: 'user33@gmail.com'
        }
      ];

       return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
    }
    
    
    export default ArrayRender2
