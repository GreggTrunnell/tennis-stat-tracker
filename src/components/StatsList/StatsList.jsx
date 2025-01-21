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
          First Name: { stat.first_name } Last Name: { stat.last_name } 
          Playing Hand: { stat.playing_hand } Raquet: { stat.raquet_brand } 
        </div>)}
       
        <button onClick={()=>{fetchList()}}>Fetch List</button>
    </div>
  );
  }

export default StatsList;
