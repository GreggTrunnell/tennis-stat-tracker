import { useState } from 'react'

function Losers() {
  //setup a getter and setter with useState(a hook in react)
  const [ doubleFaults, setDoubleFaults] = useState(0);
  const [ forehandLoser, setForehandLoser ] = useState(0);
  const [ backhandLoser, setBackhandLoser] = useState(0);
  const [ losers, setLosers ] = useState(0);
  
    const addDoubleFault=()=>{
      console.log('Double Fault')
      setDoubleFaults(doubleFaults + 1);}

    const addForehandLoser=()=>{
      console.log('Forehand Error')
      setForehandLoser( forehandLoser + 1);} 

    const addBackhandLoser=()=>{
      console.log('Backhand Loser')
      setBackhandLoser( backhandLoser + 1);}  

      const addLoser=()=>{
        setLosers( losers + 1 );}       
  
  return (
    <div>
     <h3>Unforced Errors</h3>
      <p>{ doubleFaults }: DoubleFaults</p>
      <p>{ forehandLoser }: Forehand</p>
      <p>{ backhandLoser }: Backhand </p>
      <button onClick={ ()=> { addDoubleFault(); addLoser() }}>Double Fault</button>
      <button onClick={ ()=> { addForehandLoser(); addLoser() }}>Forehand</button>
      <button onClick={ ()=> { addBackhandLoser(); addLoser() }}>Backhand</button>
      <p>Errors: { losers }</p>
    </div>
  );
  }

export default Losers;
