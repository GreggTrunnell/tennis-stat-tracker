import React, { useState } from 'react';

function Scoring( ) {
  const [score, setScore] = useState({
    player1: { points: 0, games: 0, sets: [] },
    player2: { points: 0, games: 0, sets: [] },
    currentSet: 1,
  });
  
  const handleScore = (player) => {
    const currentPlayerScore = { ...score[player] };
    const opponent = player === 'player1' ? 'player2' : 'player1';
    const opponentPlayerScore = { ...score[opponent] };

    if (currentPlayerScore.points < 3) {
      currentPlayerScore.points += 1;
    } else if (currentPlayerScore.points === 3 && opponentPlayerScore.points === 3) {
      currentPlayerScore.points = 'AD';
    } else if (currentPlayerScore.points === 3 && opponentPlayerScore.points < 3) {
      currentPlayerScore.points = 0;
      opponentPlayerScore.points = 0;
      currentPlayerScore.games += 1;
    } else if (currentPlayerScore.points === 'AD') {
      currentPlayerScore.points = 0;
      opponentPlayerScore.points = 0;
      currentPlayerScore.games += 1;
    } else if (opponentPlayerScore.points === 'AD') {
      opponentPlayerScore.points = 3;
      currentPlayerScore.points = 3;
    }

    if (currentPlayerScore.games >= 6 && currentPlayerScore.games - opponentPlayerScore.games >= 2) {
      currentPlayerScore.sets.push(`${currentPlayerScore.games}-${opponentPlayerScore.games}`);
      currentPlayerScore.games = 0;
      opponentPlayerScore.games = 0;
      setScore((prevScore) => ({ ...prevScore, currentSet: prevScore.currentSet + 1 }));
    }

    setScore((prevScore) => ({
      ...prevScore,
      [player]: currentPlayerScore,
      [opponent]: opponentPlayerScore,
    }));
  };
   
  //------------WINNERS
  const [aceCount, setAceCount] = useState(0);
  const [backhandWinners, setBackhandWinners] = useState(0);
  const [forehandWinners, setForehandWinners] = useState(0);
  const [myPoints, setMyPoints] = useState(0);
  const [ winners, setWinners ] = useState(0);

  const addAce = ()=>{
  console.log('Ace')
  setAceCount(aceCount + 1)};

  const addBackhandWinner=()=>{
  console.log('Backhand Winner')
  setBackhandWinners(backhandWinners + 1)};

  const addForehandWinner=()=>{
  console.log('Forehand Winner')
  setForehandWinners(forehandWinners + 1)};

  const addPoint = () => {
  console.log("Add point")
  setMyPoints(myPoints + 1)};

  const addWinner=()=>{
  setWinners( winners + 1 );}  

  //----------LOSERS
  const [ backhandLoser, setBackhandLoser] = useState(0);
  const [ doubleFaults, setDoubleFaults] = useState(0);
  const [ forehandLoser, setForehandLoser ] = useState(0);
  const [ losers, setLosers ] = useState(0);
  
  const addBackhandLoser=()=>{
  console.log('Backhand Loser')
  setBackhandLoser( backhandLoser + 1);}  
  
  const addDoubleFault=()=>{
  console.log('Double Fault')
  setDoubleFaults(doubleFaults + 1);}

  const addForehandLoser=()=>{
  console.log('Forehand Error')
  setForehandLoser( forehandLoser + 1);} 

  const addLoser=()=>{
    setLosers( losers + 1 );}     


  return (
    <div>
      {/* Player 1 */}
      <section>
        <p>
          Points:{' '}
          {score.player1.points === 0
            ? '0'
            : score.player1.points === 1
            ? '15'
            : score.player1.points === 2
            ? '30'
            : score.player1.points === 3
            ? '40'
            : score.player1.points}
        </p>
        <p>Games: {score.player1.games}</p>
        {score.player1.sets.map((set, idx) => (
          <p key={idx}>
            Set {idx + 1}: {set}
          </p>
        ))}
      <h3>Winners: { winners }</h3>
      <p>{ myPoints }: Points</p>
      <p>{ aceCount }: Aces</p>
      <p>{ forehandWinners }: Forehand </p>
      <p>{ backhandWinners }: Backhand </p> 
      <button onClick={ ()=> { handleScore('player1'); addPoint() }}>Point</button>
      <button onClick={ ()=> { handleScore('player1'); addAce(); addWinner() }}>Ace</button>
      <button onClick={ ()=> { handleScore('player1'); addForehandWinner(); addWinner() }}>Forehand</button>
      <button onClick={ ()=> { handleScore('player1'); addBackhandWinner(); addWinner() }}>Backhand</button>
            <h3>Unforced Errors: { losers }</h3>
      <p>{ doubleFaults }: DoubleFaults</p>
      <p>{ forehandLoser }: Forehand</p>
      <p>{ backhandLoser }: Backhand </p>
      <button onClick={ ()=> { addDoubleFault(); addLoser() }}>Double Fault</button>
      <button onClick={ ()=> { addForehandLoser(); addLoser() }}>Forehand</button>
      <button onClick={ ()=> { addBackhandLoser(); addLoser() }}>Backhand</button>
      </section>
  
      {/* Player 2 */}
      {/* <section>
        <h2>Player 2</h2>
        <p>
          Points:{' '}
          {score.player2.points === 0
            ? '0'
            : score.player2.points === 1
            ? '15'
            : score.player2.points === 2
            ? '30'
            : score.player2.points === 3
            ? '40'
            : score.player2.points}
        </p>
        <p>Games: {score.player2.games}</p>
        {score.player2.sets.map((set, idx) => (
          <p key={idx}>
            Set {idx + 1}: {set}
          </p>
        ))}
        <button onClick={() => handleScore('player2')}>
          Score Player 2
        </button>
                      <h3>Winners: { winners }</h3>
      <p>{ myPoints }: Points</p>
      <p>{ aceCount }: Aces</p>
      <p>{ forehandWinners }: Forehand </p>
      <p>{ backhandWinners }: Backhand </p> 
      <button onClick={ ()=> { handleScore('player1'); addPoint() }}>Point</button>
      <button onClick={ ()=> { handleScore('player1'); addAce(); addWinner() }}>Ace</button>
      <button onClick={ ()=> { handleScore('player1'); addForehandWinner(); addWinner() }}>Forehand</button>
      <button onClick={ ()=> { handleScore('player1'); addBackhandWinner(); addWinner() }}>Backhand</button>
      </section> */}
    </div>
  );
}

export default Scoring;
