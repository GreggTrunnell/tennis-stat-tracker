import { useState, useEffect } from 'react';
import axios from 'axios';

function StatsList() {
  const [statsList, setStatsList] = useState([]);

  useEffect(()=> {
    fetchList();
  },[]);
  
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
          Player: { stat.player }
        </div>)}
    </div>
  );
  }

export default StatsList;
