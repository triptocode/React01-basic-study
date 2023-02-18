// 1 - props 사용방법
// import React from "react";

// function Hello(props){
//     console.log(props);
//     return <div style= {{color: props.color}}>
//              안녕하세요{props.name}
//            </div>;
// }

// export default Hello;


// 2 - props 사용방법 (구조분해방식)
// 3 - defaultProps 
import React from "react";

function Hello({color, name}){
    return <div style= {{color}}>
             안녕하세요{name}
           </div>;
}

Hello.defaultProps = {name: "defaultProps - 사용되지 않을때 보여주도록함!"}

export default Hello;