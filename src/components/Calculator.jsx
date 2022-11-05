import {useState} from "react";
import './Calculator.css';

const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  const inputNum = (e) => {
    let input = e.target.value;
    if(num === 0) {
      setNum(input);
    }else {
      setNum(num+input)
    }
  }

  const clear = () => {
    setNum(0)
  }

  const porcentagem = (e) => {
    setNum(num / 100)
  }

  const changeSing = () => {
    if(num > 0) {
      setNum(-num);
    }else {
      setNum(Math.abs(num));
    }
  }

  const operatorHandler = (e) => {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  const calculate = () => {
    if (operator === '/') {
      setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === 'X') {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === '-') {
      setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === '+') {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }

  return (
    <div className='container'>
      <h1 className='res'>{num}</h1>
      <button onClick={clear}>AC</button>
      <button onClick={changeSing}>+/-</button>
      <button onClick={porcentagem}>%</button>
      <button onClick={operatorHandler} value={'/'} className='orange'>/</button>
      <button onClick={inputNum} value={7} className='gray'>7</button>
      <button onClick={inputNum} value={8} className='gray'>8</button>
      <button onClick={inputNum} value={9} className='gray'>9</button>
      <button onClick={operatorHandler} value={'X'} className='orange'>X</button>
      <button onClick={inputNum} value={4} className='gray'>4</button>
      <button onClick={inputNum} value={5} className='gray'>5</button>
      <button onClick={inputNum} value={6} className='gray'>6</button>
      <button onClick={operatorHandler} value={'-'} className='orange'>-</button>
      <button onClick={inputNum} value={1} className='gray'>1</button>
      <button onClick={inputNum} value={2} className='gray'>2</button>
      <button onClick={inputNum} value={3} className='gray'>3</button>
      <button onClick={operatorHandler} value={'+'} className='orange'>+</button>
      <button onClick={inputNum} value={0} className='gray'>0</button>
      <button style={{visibility: "hidden"}}>L</button>
      <button onClick={inputNum} value={'.'} className='grey'>,</button>
      <button onClick={calculate} className='orange'>=</button>
    </div>
  )
}

export default Calculator
