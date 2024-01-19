// // UseEffect 1번째 예제  - 실행순서


// import React, { useEffect, useState } from "react";

// function UseEffect() {
//   const [name, setName] = useState("변경전 닉네임");

//   useEffect(() => {
//     console.log("컴포넌트 나타남");
//     console.log(name); // 초기 닉네임 // 닉네임 변경
//     return () => {
//       console.log("컴포넌트 사라짐");
//     };
//   });

//   const onClick = () => {
//     setName("변경후 닉네임");
//   };
//   return (
//     <div>
//       {name} <button onClick={onClick}>변경</button>
//     </div>
//   );
// }

// export default UseEffect;





// // 2번째 예제  - 실행순서
// import { useEffect } from "react"

// function UseEffect() {
  
//  const al = alert("컴포넌트!")

//   useEffect(() => {
//     // window.confirm("window- useEffect안에서 return 외부 실행")
//     alert("hi - useEffect안 return 내부 실행")
//     // setTimeout( ()=> {console.log("Hi- useEffect안 return 외부 실행")}, "3000")
//     // console.log('hi :)')
//     return (
//       // setTimeout( ()=> {console.log("useEffect안 return 내부 실행")}, "3000")  
//       alert("bye - useEffect안 return 내부 실행")
//       // console.log("bye - useEffect안 return 내부 실행")
//     )
//   }, []);

//   return (
//     <>
//       <h1>Componenet return !</h1>
//     </>
//   )

// }

// export default UseEffect;




// // 3번째 예제  - 실행순서
import { useState, useEffect } from "react";

function UseEffect(){
  // 1번째 실행 (state 초기화 및 콘솔 출력)
  const [count, setCount] = useState(0);
  console.log("컴포넌트 내부 코드를 실행합니다.");

  useEffect(() => {
    // 3번째 실행
    alert("useEffect - return 외부")
    console.log("useEffect- 컴포넌트가 렌더링 또는 업데이트 되었습니다.");
    return () => {
      // 4번째 실행
      console.log("useEffect- 컴포넌트가 언마운트되기 전에 호출됩니다.");
    };
  }, [count]);

  return (
    <>
      {/* 2행째 실행 */}
      {alert("컴포넌트 return 내부")}
      {console.log("렌더링 중...")}
      <p>Count: {count}</p>
      <button
        onClick={() =>
          setCount((prev) => {
            return prev + 1;
          })
        }
      >
        증가
      </button>
    </>
  );
}

export default UseEffect;
