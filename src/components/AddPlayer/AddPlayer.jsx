import userStore from "../zustand/store";
import axios from "axios";

function AddPlayer( ) {
  
  const player=userStore(( state )=> state.player );

  function addPlayerProfile(e){
    console.log('addPlayerProfile hit')
    const objectToSend={
      first_name: player.first_name,
      last_name: player.last_name,
      playing_hand: player.playing_hand,
      raquet_brand: player.raquet_brand
    }
    axios.post('/api/stats', objectToSend).then(( response )=>{
      console.log('response', response.data );
      alert('stats sent')
    }).catch(( err )=>{
      console.log( 'error in post AddPlayer', err );
    })
    };
 
  return (
     <div className='AddPlayer'>
      <h2>Player Profile</h2>
     <form> 
      <input type="text" placeholder="First Name" onChange={ (e)=>player.first_name= e.target.value  } />
      <input type="text" placeholder="Last Name" onChange={ (e)=>player.last_name= e.target.value  } />
      <input type="text" placeholder="Playing Hand" onChange={ (e)=>player.playing_hand= e.target.value  } />
      <input type="text" placeholder="Raquet Brand" onChange={ (e)=>player.raquet_brand= e.target.value  } />
      <button onClick={ addPlayerProfile }>Add Player Profile</button>
      </form>
    </div>
  );
  }

export default AddPlayer;
