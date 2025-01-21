import { useState } from 'react';
import axios from 'axios';

function StatsList() {
  const [statsList, setStatsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // const fetchList= () => {
  //   console.log('fetching list')
  //   axios.get(`/api/search?q=${searchQuery}`)
  //   .then((response)=>{
  //     console.log("response from GET", response.data);
  //     setStatsList( response.data);
  //   })
  //   .catch((error)=>{
  //     console.log("error on GET", error);
  //   });
  // };
  const Search = () => {
    console.log('Fetching query:', searchQuery);
    axios.get(`/api/search?q=${ searchQuery }`) // Use encodeURIComponent for safety
      .then((response) => {
        console.log("Response from GET", response.data);
        setStatsList(response.data); // Update state with response data
      })
      .catch((error) => {
        console.log("Error on GET", error);
      });
  };
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search by name or brand" 
        value={searchQuery} 
        onChange={( e ) => setSearchQuery( e.target.value )} // Update the search query
      /> 
      {/* <button onClick={()=>{fetchList()}}>Fetch List</button> */}
      <button onClick={ Search }>Search</button>
            { statsList.map(( stat, index )=>
        <div key={ index }>
          First Name: { stat.first_name } Last Name: { stat.last_name } 
          Playing Hand: { stat.playing_hand } Raquet: { stat.raquet_brand } 
        </div>)}
              
    </div>
  );
  }

export default StatsList;
