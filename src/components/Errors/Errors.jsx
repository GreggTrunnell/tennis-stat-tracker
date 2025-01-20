import { useState } from 'react'

function Errors(props) {
  //setup a getter and setter with useState(a hook in react)
  const [ doubleFaults, setDoubleFaults] = useState(0);
  const [ forehandError, setForehandError ] = useState(0);
  const [ backhandError, setBackhandError] = useState(0);
  
  const addDoubleFault=()=>{
    setDoubleFaults(doubleFaults + 1);}

    const addForehandError=()=>{
      setForehandError(forehandError + 1);} 

    const addBackhandError=()=>{
      setBackhandError(backhandError + 1);}  
  
  return (
    <div>
     <h3>Unforced Errors</h3>
      <p>{ doubleFaults }: DoubleFaults</p>
      <p>{ forehandError }: Forehand</p>
      <p>{ backhandError }: Backhand </p>
      <button onClick={ addDoubleFault }>Double Fault</button>
      <button onClick={ addForehandError }>Forehand</button>
      <button onClick={ addBackhandError }>Backhand</button>

    </div>
  );
  }

export default Errors;
