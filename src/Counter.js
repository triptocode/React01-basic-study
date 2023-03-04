import React, { useState } from 'react';
//위 코드는 리액트 패키지에서 useState 라는 함수를 불러와준다.

function Counter() {
  
  // 아래 useState(0)는, 0을 기본값으로 넣고 useState() 함수호출
  // 즉, const [현재상태, 추후숫자를 넘겨받는 setter함수] = useState(파라미터에넣은기본값);
  const [number, setNumber] = useState(0);
  

  const onIncrease = () => {
    setNumber(a => a + 1);
  }
 
  const onDecrease = () => {
    setNumber(a => a - 1);
  }
 
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>  {/* onIncrease 는 1증가 화살표함수를 의미 */}
      <button onClick={onDecrease}>-1</button>  {/* onDecrease 는 1감소 화살표함수를 의미 */}
    </div>
  );
}

export default Counter;