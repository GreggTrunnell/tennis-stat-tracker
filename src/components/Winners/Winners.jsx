import { useState } from 'react';
import axios from 'axios';

function Winners() {
//! data not being sent correctly. some connection to db but when adding an ace it just
//! updates aces to zero

  const [winnerStats, setWinnerStats] = useState({
    points:        0,
    aces:          0,
    fhWinners:     0,
    bhWinners:     0,
    totalWinners:  0
  });
  
  const updateStats = (updatedStats) =>{
    console.log("sending to db", winnerStats)
    axios.put("/api/match_stats", winnerStats)
    .then((response)=>{
      setWinnerStats(winnerStats)
    })
    .catch((err)=>{
      console.log("error in winners post", err)
    })
  }

  const incrementAndPost = (key) => {
    // derive new values
    const isPrimary = key === 'points';
    //created this new variable in this block so imutable
    const updated = {
      ...winnerStats,
      [key]: winnerStats[key] + 1,
      totalWinners: isPrimary
        ? winnerStats.totalWinners
        : winnerStats.totalWinners + 1
    };
    updateStats(updated);
    setWinnerStats(updated);
  };
  

  return (
    <div>
      <div className="winners-stats" >
      {/* <h3>Winners: { winners }</h3> */}
      {/* <p>{ winnerStats.points }: Points</p> */}
      {/* <p>{ aceCount }: Aces</p>
      <p>{ forehandWinners }: Forehand </p>
      <p>{ backhandWinners }: Backhand </p>  */}
      <button onClick={() => incrementAndPost('points')}>Point</button>
      <button onClick={() => incrementAndPost('aces')}>Ace</button>
      {/* <button onClick={ ()=> { addPoint() }}>Point</button>
      <button onClick={ ()=> { addAce(); addWinner() }}>Ace</button>
      <button onClick={ ()=> { addForehandWinner(); addWinner() }}>Forehand</button>
      <button onClick={ ()=> { addBackhandWinner(); addWinner() }}>Backhand</button> */}
    </div>
    </div>
  );
  }

export default Winners;
