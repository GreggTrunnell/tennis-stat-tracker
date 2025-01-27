import { useState } from 'react';

function Score( ) {
  
  const [ playerOneScore, setPlayerOneScore ] = useState( 0 );
  const [ playerTwoScore, setPlayerTwoScore ] = useState( 0 );

  const tennisScore = [ "Love", "15", "30", "40", "Ad", "Game"];
  // const isDuece = setPlayerOneScore( 3 ); setPlayerTwoScore( 3 );

  const addPlayerOnePoint=()=>{
    if( playerOneScore < 6 )
      setPlayerOneScore( playerOneScore + 1 );
    if( playerOneScore === 4 && playerTwoScore === 3)
      setPlayerOneScore( 5 );
    if( playerOneScore === 5 && playerTwoScore === 4 )
      setPlayerOneScore( 3 );
    if( playerOneScore === 4 && playerTwoScore === 5 )
      setPlayerOneScore( 3 );
    if( playerOneScore === 6 )
      setPlayerOneScore( 100 );
  }

  
  // const addPlayerTwoPoint=()=>{
  //   if( playerTwoScore < 4)
  //     setPlayerTwoScore( playerTwoScore + 1 );} 
    
  //   if( playerTwoScore === 4 && playerOneScore === 3 )
  //     setPlayerTwoScore( 5 );
    
console.log( 'playerOneScore',playerOneScore )
  return (
     <div className='Score'>
        <p>Something in Score</p>
        <button onClick={()=>{ addPlayerOnePoint( "playerOne" )}}>Point Player One</button>
        <p>Player One { playerOneScore }</p>
        <p>Player Two { playerTwoScore }</p>

        <button onClick={()=>{ addPlayerTwoPoint( "playerTwo" )}}>Point Player Two</button>
    </div>
  );
  }

export default Score;
