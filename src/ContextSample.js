import React from "react" ;

function Child({text3}) {
    return <p>{text3}</p> 
}

function Parent({text2}) {
    return <Child text3={text2} />
}

function GrandParent({text1}) {
    return <Parent text2={text1} />
}

function ContextSample() {
    return (
        <GrandParent text1=" (1) props에 담는 문장 " />
    )
}

export default ContextSample;








// import React, { createContext, useContext} from "react" ;

// const MyContext = createContext('defaultValue');
// // context는 createContext()를 사용한다.
// // 여기에 들어가는 파라미터인 defaultValue는 context를 사용하지 않았을때의 기본값
// // 값을 설정하고 싶을때는 MyContext.Provider 컴포넌트를 사용해 값을 지정해주어야 합니다.


// function Child() {
//     const text = useContext(MyContext)
//     return <div> {text}</div>
// }

// function Parent() {
//     return <Child />
// }

// function GrandParent() {
//     return <Parent />
// }

// function ContextSample() {
    
   
//      // 1. useState에서 value데이터를 관리하는데, 초기값이 true여서 삼항연산자에서 초기값은 true 결과를 반환
//     return (
//         <MyContext.Provider value=" (2) props에 담는 문장">
//             <GrandParent/>   
//         </MyContext.Provider>
//     )
// }

// export default ContextSample;












// import React, { useState,createContext, useContext} from "react" ;

// const MyContext = createContext('defaultValue');
// // context는 createContext()를 사용한다.
// // 여기에 들어가는 파라미터인 defaultValue는 context를 사용하지 않았을때의 기본값
// // 값을 설정하고 싶을때는 MyContext.Provider 컴포넌트를 사용해 값을 지정해주어야 합니다.


// function Child() {
//     const text = useContext(MyContext)
//     return <div> {text}</div>
// }

// function Parent() {
//     return <Child />
// }

// function GrandParent() {
//     return <Parent />
// }

// function ContextSample() {
    
//     const [data, setData] = useState(true)
//      // 1. useState에서 value데이터를 관리하는데, 초기값이 true여서 삼항연산자에서 초기값은 true 결과를 반환
//     return (
//         <MyContext.Provider value={data ? "(3) true일때 props에 넣을 문장" : "(3) false일때 props에 넣을 문장"}>
//         <GrandParent />
//         {/* 2. 버튼클릭시 setValue 업데이트함수로 value 값이 true, false 등반전이 된다.  */}
//         <button onClick={() => setData(!data)}> true/false 버튼</button>
//         </MyContext.Provider>
//     )
// }

// export default ContextSample;


