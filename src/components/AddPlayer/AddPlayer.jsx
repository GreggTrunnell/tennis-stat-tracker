import useStore from "../zustand/store";
import axios from "axios";

function AddPlayer( ) {
  
  const { player, updatePlayer }=useStore(( state )=> ({
    player: state.player,
    updatePlayer: state.updatePlayer
    }));
  function addPlayerProfile(e){
    e.preventDefault();
    console.log('addPlayerProfile hit')

    const objectToSend={
      first_name: player.first_name,
      last_name: player.last_name,
      playing_hand: player.playing_hand,
      racquet_brand: player.racquet_brand,
      country: player.country
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
      <img className="w-50 h-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVhfwFVx_VaJ3LP-KCdE6xdSWAs6C9_qaAw&s"/>
      <h2>Add Player Profile</h2>
     <form > 
      <input type="text" placeholder="First Name" onChange={ (e)=>updatePlayer({ first_name: e.target.value })} />
      <input type="text" placeholder="Last Name" onChange={ (e)=>updatePlayer({ last_name: e.target.value })} />
      <input type="text" placeholder="Playing Hand" onChange={ (e)=>updatePlayer({ playing_hand: e.target.value })}/>
      <input type="text" placeholder="Racquet Brand" onChange={ (e)=>updatePlayer({ racquet_brand: e.target.value })} />
      <input type="text" placeholder="Country" onChange={ (e)=>updatePlayer({ country: e.target.value })} />
      <button onClick={ addPlayerProfile }>Add Player Profile</button>
     </form>
    </div>
  );
  }

export default AddPlayer;