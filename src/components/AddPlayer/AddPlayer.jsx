import axios from "axios";
import { useState } from "react";

function AddPlayer( ) {

  const [ newPlayer, setNewPlayer ] = useState({ first_name: '', last_name: '', playing_hand: '', racquet_brand: '', country: ''})

  function addPlayerProfile(){;
    axios.post( '/api/stats', newPlayer).then (( response )=>{
     // console.log('response data from createnew post', response.data )
    }).catch(( err )=>{
     console.log( err );
    })
   }
    
  return (
     <div className='AddPlayer'>
      <img className="w-50 h-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVhfwFVx_VaJ3LP-KCdE6xdSWAs6C9_qaAw&s"/>
      <h2>Add Player Profile</h2>
     <form>
      <input type="text" placeholder="First Name" onChange={(e)=>{ setNewPlayer({ ...newPlayer, first_name: e.target.value })}} />
      <input type="text" placeholder="Last Name" onChange={(e)=>{ setNewPlayer({ ...newPlayer, last_name: e.target.value })}} />
      <input type="text" placeholder="Playing Hand" onChange={(e)=>{ setNewPlayer({ ...newPlayer, playing_hand: e.target.value })}} />
      <input type="text" placeholder="Racquet Brand" onChange={(e)=>{ setNewPlayer({ ...newPlayer, racquet_brand: e.target.value })}} />
      <input type="text" placeholder="Country" onChange={(e)=>{ setNewPlayer({ ...newPlayer, country: e.target.value })}} />
      <button onClick={ addPlayerProfile }>Add Player Profile</button>
     </form>
    </div>
  );
  }

export default AddPlayer;
