import { useState } from 'react';
import axios from 'axios';

function StatsList() {
  const [statsList, setStatsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const Search = () => {
    console.log('Fetching query:', searchQuery);
    axios.get(`/api/search?q=${ searchQuery }`)
      .then((response) => {
        console.log("Response from GET", response.data);
        setStatsList(response.data); 
      })
      .catch((error) => {
        console.log("Error on GET", error);
      });
  };

  //this function is used to make a search when the return button is hit
  //it needs to be inside the input element
  const handleKeyDown = ( event )=>{
    if( event.key === 'Enter'){
      Search();
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search" 
        value={searchQuery} 
        onChange={( e ) => setSearchQuery( e.target.value )} 
        onKeyDown={ handleKeyDown }
      /> 
      <button onClick={ Search }>Search</button>
            { statsList.map(( stat, index )=>
        <div key={ index }><span className='search_results'>
         { stat.first_name } { stat.last_name } </span>
          Playing Hand: { stat.playing_hand } Raquet: { stat.raquet_brand } 
        </div>)}
              
    </div>
  );
  }

export default StatsList;
