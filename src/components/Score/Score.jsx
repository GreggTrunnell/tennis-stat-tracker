import { useState } from 'react';

function Score( ) {
  
  const [ playerOneScore, setPlayerOneScore ] = useState( 0 );
  const [ playerTwoScore, setPlayerTwoScore ] = useState( 0 );

  const tennisScore = [ "Love", "15", "30", "40", "Ad", "Game"];
  // const isDuece = setPlayerOneScore( 3 ); setPlayerTwoScore( 3 );

  const addPlayerOnePoint=( player )=>{
    if( player === "playerOne" )
    if( playerOneScore === 4 && playerTwoScore === 3)
      setPlayerOneScore( 5 );
    if( playerOneScore === 5 && playerTwoScore === 4 )
      setPlayerOneScore( 3 );
    if( playerOneScore === 4 && playerTwoScore === 5 )
      setPlayerOneScore( 3 );
    if( playerOneScore === 6 )
      setPlayerOneScore( 100 );
    if( playerOneScore < 6 )
      setPlayerOneScore( playerOneScore + 1 );

    if( player === "playerTwo")
    if( playerTwoScore < 6 )
      setPlayerTwoScore( playerTwoScore + 1 );
    if( playerTwoScore === 4 && playerOneScore === 3)
      setPlayerTwoScore( 5 );
    if( playerTwoScore === 5 && playerOneScore === 4 )
      setPlayerTwoScore( 3 );
    if( playerTwoScore === 4 && playerOneScore === 5 )
      setPlayerTwoScore( 3 );
    if( playerTwoScore === 6 )
      setPlayerTwoScore( 200 );
  }
    
console.log( 'playerOneScore',playerOneScore )
  return (
     <div className='Score'>
        <p>Something in Score</p>
        <button onClick={()=>{ addPlayerOnePoint( "playerOne" )}}>Point Player One</button>
        <p>Player One { playerOneScore }</p>
        <p>Player Two { playerTwoScore }</p>

        <button onClick={()=>{ addPlayerOnePoint( "playerTwo" )}}>Point Player Two</button>
    </div>
  );
  }

export default Score;
