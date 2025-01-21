import { useState } from 'react';
import axios from 'axios';

function StatsList() {
  const [statsList, setStatsList] = useState([]);

  //Needed to add this hook to make the search input work
  const [ searchQuery, setSearchQuery ] = useState('');

  const Search= () => {
    console.log('fetching query', searchQuery)
    axios.get(`/api/search?q=${ searchQuery }`)
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
      <input type='text' placeholder='Search' value={ searchQuery }
      onChange={(e)=> setSearchQuery(e.target.value)} />
      <button onClick={()=>{Search()}}>Search</button>
         { statsList.map(( stat, index )=>
        <div key={ index }>
          First Name: { stat.first_name } Last Name: { stat.last_name } 
          Playing Hand: { stat.playing_hand } Raquet: { stat.raquet_brand } 
        </div>)}
    
    </div>
  );
  }

export default StatsList;
