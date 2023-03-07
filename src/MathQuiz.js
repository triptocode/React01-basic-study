import React, {useState, useRef} from "react";


function MathQuiz(){
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [first2, setFirst2] = useState(Math.ceil(Math.random() * 9));
    const [second2, setSecond2] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState('');
    const [result2, setResult2] = useState('');
    const input1 = useRef(null);
    const input2 = useRef(null);

    const multiplySubmitForm = (e) => {
      e.preventDefault();
      if (parseInt(value) === first * second) {
        setResult('정답! 다음문제 gogo!');
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
        setValue('');
        input2.current.focus();
      } else {
        setResult('땡! 다시 정답을 맞춰보세요! ');
        setValue('');
        input1.current.focus();
      }
    };

    const addSubmitForm = (e) => {
      e.preventDefault();
      if (parseInt(value2) === first2 + second2) {
        setResult2('정답! 통과하셨습니다.');
        setFirst2(Math.ceil(Math.random() * 9));
        setSecond2(Math.ceil(Math.random() * 9));
        setValue2('');
       
      } else {
        setResult2('땡! 다시 정답을 맞춰보세요!');
        setValue2('');
       
      }
    };


    return (
      <div className ="App-header">
        <h4 style={{color:"pink"}}>Quiz 1</h4>
          <div> {first} x {second} = ?</div>
        <form onSubmit={multiplySubmitForm}>
         &nbsp;<input
                  ref={input1}
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
          &nbsp;<button>입력!</button>
        </form>
        <h6 id="result" style={{color:"red"}}>{result}</h6>

        <br></br>
        <h4 style={{color:"beige"}}>Quiz 2</h4>
          <div> {first2} + {second2} = ?</div>
        <form onSubmit={addSubmitForm}>
         &nbsp;<input
                  ref={input2}
                  type="number"
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                />
          &nbsp;<button>입력!</button>
        </form>
        <h6 id="result" style={{color:"red"}}>{result2}</h6>
      </div>
    );
  };


  export default MathQuiz;