import React from "react";

function Wrapper ({children}){
    const boxLine = {
        border: "2px solid black",
        padding: 16,
        background: "beige"
    }

    return <div style={boxLine}>{children}</div>
}

export default Wrapper;