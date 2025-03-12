import axios from 'axios';
import { useEffect, useState } from 'react';

function APIPractice( ) {

  const [ giphySearch, setGiphySearch ]= useState('');
  const [ searchResults, setSearchResults  ]= useState([]);

  const getApiData=()=>{
    console.log('getApiData pressed');
    const url =`https://swapi.dev/api/films/`
    axios.get( url ).then((response)=>{
      console.log('response data from giphy search', response.data);
      setSearchResults( response.data )
    })
    .catch(( err )=>{
      console.log('error in giphy search', err )
    })
  }
  
  return (
     <div className='APIPractice'>
      <button onClick={getApiData}>Get</button>
      <p>{JSON.stringify(searchResults)}</p>
    </div>
  );
  }

export default APIPractice;
