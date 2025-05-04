import { useState } from 'react'
import { post } from '../../../server/routes/match_stats.router';

function Winners() {

  const [winnerStats, setWinnerStats] = useState({
    points:        0,
    aces:          0,
    fhWinners:     0,
    bhWinners:     0,
    totalWinners:  0
  });
  
  const postStats = (updatedStats) =>{
    console.log("sending to db", winnerStats)
    axios.post("/api/match_stats", winnerStats)
    .then((response)=>{
      setWinnerStats({points: 0})
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
      ...stats,
      [key]: stats[key] + 1,
      totalWinners: isPrimary
        ? stats.totalWinners
        : stats.totalWinners + 1
    };
  };
  
  postStats(updated);
  // setWinnerStats(updated);

  return (
    <div>
      <div className="winners-stats" >
      {/* <h3>Winners: { winners }</h3> */}
      <p>{ winnerStats.points }: Points</p>
      {/* <p>{ aceCount }: Aces</p>
      <p>{ forehandWinners }: Forehand </p>
      <p>{ backhandWinners }: Backhand </p>  */}
      <button onClick={() => incrementAndPost('points')}>Point</button>
      {/* <button onClick={ ()=> { addPoint() }}>Point</button>
      <button onClick={ ()=> { addAce(); addWinner() }}>Ace</button>
      <button onClick={ ()=> { addForehandWinner(); addWinner() }}>Forehand</button>
      <button onClick={ ()=> { addBackhandWinner(); addWinner() }}>Backhand</button> */}
    </div>
    </div>
  );
  }

export default Winners;
