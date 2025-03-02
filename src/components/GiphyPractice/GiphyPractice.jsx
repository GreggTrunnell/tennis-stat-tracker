import axios from 'axios';
import { useEffect, useState } from 'react';

function GiphyPractice( ) {

  const [ giphySearch, setGiphySearch ]= useState('');
  const [ searchResults, setSearchResults  ]= useState([]);

  const searchGiphies=()=>{
    console.log('searchGiphies pressed');
    const url =`https://api.giphy.com/v1/gifs/search?api_key=CiZ1eb9RwrhPH8aiEEpbXAKxso2Mps28&q=${giphySearch}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    axios.get( url ).then((response)=>{
      console.log('response data from giphy search', response.data);
      setSearchResults( response.data.data )
    })
    .catch(( err )=>{
      console.log('error in giphy search', err )
    })
  }
  
  return (
     <div className='GiphyPractice'>
      <input type="text" placeholder='giphy this' onChange={(e)=>setGiphySearch(e.target.value)} />
      <button onClick={searchGiphies}>Search</button>
      <div>
      <p>Search here:</p>
      <div>
      {
        searchResults.map((giph, index )=>(
          <div>
         <img key={index} src={ giph.images.original.url }/>
         <h2> {giph.title} </h2>
         </div>
        ))
      }
      </div>
      <p>{giphySearch}</p>
      <p>{JSON.stringify(searchResults)}</p>
      </div>
    </div>
  );
  }

export default GiphyPractice;
