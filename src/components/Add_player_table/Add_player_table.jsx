

function Add_player_table( {addPlayer, setAddPlayer} ) {
  function setNewPlayer(e){
    setAddPlayer(e.target.value)
    }
  function handleSubmit(e){
      e.preventDefault();
      addPlayer();
    }  
  
  return (

    <div>
      <form onSubmit={ handleSubmit }>
        <input type="text" placeholder="Add Player to table" onChange={ setNewPlayer } />
        <button onClick={ addPlayer }>Add to Table</button>
      </form>
  
    </div>
  );
  }

export default Add_player_table;
