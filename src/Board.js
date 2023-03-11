import React, { useState } from "react";
import './App.css';
import './board.css';


function Square({ox, onBtnClick}){

    return(
        <button className="btn-square" onClick={onBtnClick} > {ox} </button>
    )
}

function Board(){

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isX, setIsX] =useState(true)
    const handleBtnClick= (i) => {
        // if (calculateWinner(squares) || squares[i]) {
        //     return
        //   }


        //squares[인덱스] 는 해당인덱스의 배열원소 1개를 의미,  isX 요소가 true면 x : 거짓이면 o d인데 
        // useState(true)로 isX 초기값을 true로 잡아둬서 아래의 삼항연산자 isX 는 초기에 true라 'x' 라는 데이터 결과값으로 시작하게됨! 
        squares[i] = isX? 'x':'o' 
        setSquares(squares)
        setIsX(!isX)
    }

    // const winner = calculateWinner(squares)
    // let status
    
    // if (winner) {
    //   status = `Winner: ${winner}`;
    // } else {
    //   status = 'Next player: ' + (isX ? 'X' : 'O');
    // }
    
    const handleRestart = () => {
      setIsX(true)
      setSquares(Array(9).fill(null))
    }
  
    // // 2. return 반환값을 renderSquare(i)로 간결한 코드로 구현하기
    // const renderSquare = (i) => {
    //   return <Square ox={squares[i]} onBtnClick={() => handleBtnClick(i)}/>
    // }

    // return( 
    //     <div className="board">
    //         <div className="board-row">
    //         {renderSquare(0)}
    //         {renderSquare(1)}
    //         {renderSquare(2)}
    //     </div>
    //     <div className="board-row">
    //         {renderSquare(3)}
    //         {renderSquare(4)}
    //         {renderSquare(5)}
    //     </div>
    //     <div className="board-row">
    //         {renderSquare(6)}
    //         {renderSquare(7)}
    //         {renderSquare(8)}
    //         </div> 

    //         {/* <div className="status">{status}</div> */}
    //         <button className="restart" onClick={handleRestart}>Restart Game!</button>
    //     </div>
    // )

    // 1. return 반환값을 renderSquare(i)를 사용하지 않아 간결하기보다 조금 긴 코드로 구현
    return( 
        <div className="App-header">

                <h3 className="title">Let's start Game!</h3> <h5 className="title-player"> First player is X !</h5>
            
            <div className="board">
                <div className="board-row">
                    <Square ox={squares[0]} onBtnClick={()=> handleBtnClick(0)}/>
                    <Square ox={squares[1]} onBtnClick={()=> handleBtnClick(1)}/>
                    <Square ox={squares[2]} onBtnClick={()=> handleBtnClick(2)}/>
                </div>
                <div className="board-row">
                    <Square ox={squares[3]} onBtnClick={()=> handleBtnClick(3)}/>
                    <Square ox={squares[4]} onBtnClick={()=> handleBtnClick(4)}/>
                    <Square ox={squares[5]} onBtnClick={()=> handleBtnClick(5)}/>
                </div>
                    <div className="board-row">
                    <Square ox={squares[6]} onBtnClick={()=> handleBtnClick(6)}/>
                    <Square ox={squares[7]} onBtnClick={()=> handleBtnClick(7)}/>
                    <Square ox={squares[8]} onBtnClick={()=> handleBtnClick(8)}/>
                </div> 

                {/* <div className="status" style={{color:'beige'}}>{status}</div> */}
                <button className="btn-restart" onClick={handleRestart}>Restart Game!</button>
            </div>
        </div>
    )

  
    // return( 
    //     <div className="board">
    //         <div className="board-row">
    //             <Square ox={'X'}/>
    //             <Square ox={'O'}/>
    //             <Square ox={'X'}/>
    //         </div>
    //         <div className="board-row">
    //             <Square ox={'X'}/>
    //             <Square ox={'X'}/>
    //             <Square ox={'O'}/>
    //         </div>
    //             <div className="board-row">
    //             <Square ox={'O'}/>
    //             <Square ox={'X'}/>
    //             <Square ox={'O'}/>
    //         </div> 
    //     </div>
    // )


} // --Board 컴포넌트 영역 끝--


// function calculateWinner(squares) {
//     const winningPatterns = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ]
    
//     for (let i = 0; i < winningPatterns.length; i++) {
//       const [a, b, c] = winningPatterns[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
// }





export default Board;
