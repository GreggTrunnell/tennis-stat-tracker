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
  
  return (
    <div>
      {/* Player 1 */}
      <section>
        <h2>Player 1</h2>
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
        <button onClick={() => handleScore('player1')}>
          Score Player 1
        </button>
      </section>
  
      {/* Player 2 */}
      <section>
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
      </section>
    </div>
  );
}

export default Scoring;
