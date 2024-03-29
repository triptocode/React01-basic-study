import React , {useEffect} from 'react';


const User = React.memo( function User({ propUser, onDeleteClick, onToggleClick }) {
//  React.memo 두곳을 수정 - [첫번째] 하단의 function User 함수를 위처럼  const User = React.memo( 로 감싼다. 
// function User({propUser, onDeleteClick, onToggleClick}) {

  //2. propUser 작성 반복 피하는 방법 - 비구조 (구조분해)
  const {username, email, id, active } = propUser
  useEffect(
    () => {
            console.log("화면에 나타남");
            return () =>console.log("화면에 사라짐");
          }
    , []
  )
  return (
    <div>
      <b style={{cursor: 'pointer', color: active?'red':'black'}} onClick={ ()=>{onToggleClick(id)}}> 
           {username}
      </b> 
      &nbsp;
      <span>({email})</span>
      <button onClick={()=>{onDeleteClick(id)}}>삭제</button>
    </div>
  );
  // 1. propUser 작성을 반복하는 방법 
  // return (
  //   <div>
  //     <b style={{cursor: 'pointer', color: propUser.active?'red':'black'}} onClick={ ()=>{onToggleClick(propUser.id)}}> 
  //          {propUser.username}
  //     </b> 
  //     <span>({propUser.email})</span>
  //     <button onClick={()=>{onDeleteClick(propUser.id)}}>삭제</button>
  //   </div>
  // );
});
function MemberList({ propUsers, deleteClick, toggleClick }) {
  return (
    <div> 
             
      {/* 1. 화살표함수 - 소괄호()와 {return } 작성한 경우 */}
      {/* {propUsers.map( (u) => { return ( <User propUser={u} key={u.id} onDeleteClick={deleteClick} onToggleClick = {toggleClick} />) } )} */}
      {/* 2. 화살표함수 - 파라미터하나면 ()생략가능, 리턴이 한줄이면  {return } 생략가능 */}
      {propUsers.map( u =>  ( <User propUser={u} key={u.id} onDeleteClick={deleteClick} onToggleClick = {toggleClick} />) ) }
               {/* 3번줄- (하위 User 컴포넌트) 파라미터에 전송될 props 네임 : propUser, onDeleteClick, onToggleClick  */}
    </div>
  );
}
// export default MemberList; 
export default React.memo(MemberList); // Props가 바뀔때만 리렌더링을 해줌


