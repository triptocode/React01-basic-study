import React, { useState,createContext, useContext} from "react" ;

const MyContext = createContext('defaultValue');
// conText를 만들때는 createContext를 사용한다.
// 여기에 들어가는 파라미터인 defaultValue는 context를 사용하지 않았을때의 기본값입니다.
// 값을 설정하고 싶을때는 MyContext.Provider 컴포넌트를 사용해 값을 지정해주어야 합니다.
function Child() {
    const text = useContext(MyContext)
    return <div>안녕하세요? {text}</div>
}

function Parent() {
    return <Child />
}

function GrandParent() {
    return <Parent />
}

function ContextSample() {
    const [value, setValue] = useState(true)
    return (
        <MyContext.Provider value={value ? "Good" : "Bad"}>
        <GrandParent />
        <button onClick={() => setValue(!value)}>Click Me</button>
        </MyContext.Provider>
    )
}

export default ContextSample;