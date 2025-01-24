import Winners from '../Winners/Winners';
import Losers from '../Losers/Losers';

function Players( name ) {
  
  return (

    <div>
      <h2 className="players">{name.name}</h2>
      <Winners />
      <br></br>
      <Losers />
    </div>
  );
  }

export default Players;
