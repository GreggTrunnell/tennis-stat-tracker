import { useState } from 'react';
import axios from 'axios';

function StatsList() {
  const [statsList, setStatsList] = useState([]);

  const fetchList= () => {
    console.log('fetching list')
    axios({
      method: "GET",
      url: "/api/stats",
    })
    .then((response)=>{
      console.log("response from GET", response.data);
      setStatsList( response.data);
    })
    .catch((error)=>{
      console.log("error on GET", error);
    });
  };
  return (
    <div>
         { statsList.map(( stat, index )=>
        <div key={ index }>
          Player: { stat.player } Opponent: { stat.opponent } Date: { stat.date } Points: { stat.points } Ace: { stat.ace } 
           Forehand Winners: { stat.fh_winners } Backhand Winners: { stat.bh_winners } Double Faults: { stat.double_faults } 
           Forehand Error: { stat.fh_error } Backhand Error: { stat.bh_error }
        </div>)}
        <button onClick={()=>{fetchList()}}>Fetch List</button>
    </div>
  );
  }

export default StatsList;
