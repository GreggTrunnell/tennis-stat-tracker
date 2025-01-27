import { useState } from 'react';

function Score( ) {
  
  const [ playerOneScore, setPlayerOneScore ] = useState( 0 );
  const [ playerTwoScore, setPlayerTwoScore ] = useState( 0 );
  
  const addPlayerOnePoint=()=>{
    setPlayerOneScore( playerOneScore + 1 );} 

  const addPlayerTwoPoint=()=>{
    setPlayerTwoScore( playerTwoScore + 1 );} 

  return (
     <div className='Score'>
        <p>Something in Score</p>
        <button onClick={()=>{ addPlayerOnePoint()}}>Point Player One</button>
        <p>{ playerOneScore }</p>
        <p>{ playerTwoScore }</p>
        <button onClick={()=>{ addPlayerTwoPoint()}}>Point Player One</button>
    </div>
  );
  }

export default Score;
