import React from "react";

function Hello(props){
    console.log(props);
    return <div style= {{color: props.color}}>
             안녕하세요{props.name}
           </div>;

}

export default Hello;