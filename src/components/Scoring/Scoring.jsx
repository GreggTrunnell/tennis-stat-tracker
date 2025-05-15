import { useState } from 'react';

function Scoring({ playerNames = { player1: 'Player 1', player2: 'Player 2' } }) {
  const [score, setScore] = useState({
    player1: { points: 0, games: 0, sets: [] },
    player2: { points: 0, games: 0, sets: [] },
    currentSet: 1,
  });

  const [stats, setStats] = useState({
    player1: {
      winners: { total: 0, ace: 0, forehand: 0, backhand: 0 },
      errors: { total: 0, doubleFault: 0, forehand: 0, backhand: 0 },
    },
    player2: {
      winners: { total: 0, ace: 0, forehand: 0, backhand: 0 },
      errors: { total: 0, doubleFault: 0, forehand: 0, backhand: 0 },
    },
  });

  const handleScore = (player) => {
    const current = { ...score[player] };
    const opponent = player === 'player1' ? 'player2' : 'player1';
    const opp = { ...score[opponent] };

    if (current.points < 3) {
      current.points += 1;
    } else if (current.points === 3 && opp.points === 3) {
      current.points = 'AD';
    } else if (current.points === 3 && opp.points < 3) {
      current.points = 0;
      opp.points = 0;
      current.games += 1;
    } else if (current.points === 'AD') {
      current.points = 0;
      opp.points = 0;
      current.games += 1;
    } else if (opp.points === 'AD') {
      opp.points = 3;
      current.points = 3;
    }

    if (current.games >= 6 && current.games - opp.games >= 2) {
      current.sets.push(`${current.games}-${opp.games}`);
      current.games = 0;
      opp.games = 0;
      setScore((prev) => ({ ...prev, currentSet: prev.currentSet + 1 }));
    }

    setScore((prev) => ({
      ...prev,
      [player]: current,
      [opponent]: opp,
    }));
  };

  const recordStat = (player, category, type) => {
    setStats((prev) => ({
      ...prev,
      [player]: {
        ...prev[player],
        [category]: {
          ...prev[player][category],
          [type]: prev[player][category][type] + 1,
          total: prev[player][category].total + 1,
        },
      },
    }));
  };

  return (
    <div>
       <div className="players-container" >
      {['player1', 'player2'].map((playerKey) => {
        const opponentKey = playerKey === 'player1' ? 'player2' : 'player1';
        const { winners, errors } = stats[playerKey];
        const s = score[playerKey];

        return (
          <section key={playerKey} style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
            <h2>{playerNames[playerKey]}</h2>
            <p>Points: {['0', '15', '30', '40'][s.points] || s.points}</p>
            <p>Games: {s.games}</p>
            {s.sets.map((setScore, i) => (
              <p key={i}>Set {i + 1}: {setScore}</p>
            ))}
            <button onClick={() => handleScore(playerKey)}>
              Point
            </button>

            <div className="winners-stats" >
            <h3>Winners: {winners.total}</h3>
            <button onClick={() => { handleScore(playerKey); recordStat(playerKey, 'winners', 'ace'); }}>
              Ace
            </button>
            <button onClick={() => { handleScore(playerKey); recordStat(playerKey, 'winners', 'forehand'); }}>
              Forehand Winner
            </button>
            <button onClick={() => { handleScore(playerKey); recordStat(playerKey, 'winners', 'backhand'); }}>
              Backhand Winner
            </button>
            <p>Aces: {winners.ace}</p>
            <p>Forehand: {winners.forehand}</p>
            <p>Backhand: {winners.backhand}</p>
            </div>
            
            <div className="losers-stats">
            <h3>Unforced Errors: {errors.total}</h3>
            <button onClick={() => { handleScore(opponentKey); recordStat(playerKey, 'errors', 'doubleFault'); }}>
              Double Fault
            </button>
            <button onClick={() => { handleScore(opponentKey); recordStat(playerKey, 'errors', 'forehand'); }}>
              Forehand Error
            </button>
            <button onClick={() => { handleScore(opponentKey); recordStat(playerKey, 'errors', 'backhand'); }}>
              Backhand Error
            </button>
            <p>Double Faults: {errors.doubleFault}</p>
            <p>Forehand Errors: {errors.forehand}</p>
            <p>Backhand Errors: {errors.backhand}</p>
            </div>

          </section>
        );
      })}
      </div>
        <footer className="current-set-footer">
        <h2>Current Set: {score.currentSet}</h2>
      </footer>
    </div>
  );
}

export default Scoring;
