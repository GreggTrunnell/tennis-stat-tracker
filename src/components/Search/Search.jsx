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

  const handleKeyDown = ( event )=>{
    if( event.key === 'Enter'){
      Search();
    }
  };
//TODO refactor statsList.map  
//!  try $nbsp; for spacing instead of span
  return (
    <div>
      <img src='public/images/magnifying_man.png'/>
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
         <span>Playing Hand: { stat.playing_hand }</span> <span>Racquet: { stat.racquet_brand }</span> <span>Country: { stat.country }</span>
        </div>)}              
    </div>
  );
  }

export default StatsList;
