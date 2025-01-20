import { useState } from 'react'

function Errors(props) {
  //setup a getter and setter with useState(a hook in react)
  const [ doubleFaults, setDoubleFaults] = useState(0);
  const [ forehandError, setForehandError ] = useState(0);
  const [ backhandError, setBackhandError] = useState(0);
  const [ errors, setErrors ] = useState(0);
  
    const addDoubleFault=()=>{
      console.log('Double Fault')
      setDoubleFaults(doubleFaults + 1);}

    const addForehandError=()=>{
      console.log('Forehand Error')
      setForehandError( forehandError + 1);} 

    const addBackhandError=()=>{
      console.log('Backhand Error')
      setBackhandError( backhandError + 1);}  

      const addError=()=>{
        setErrors( errors + 1 );}       
  
  return (
    <div>
     <h3>Unforced Errors</h3>
      <p>{ doubleFaults }: DoubleFaults</p>
      <p>{ forehandError }: Forehand</p>
      <p>{ backhandError }: Backhand </p>
      <button onClick={ ()=> { addDoubleFault(); addError() }}>Double Fault</button>
      <button onClick={ ()=> { addForehandError(); addError() }}>Forehand</button>
      <button onClick={ ()=> { addBackhandError(); addError() }}>Backhand</button>
      <p>Errors: { errors }</p>
    </div>
  );
  }

export default Errors;
