import Winners from '../Winners/Winners';
import Losers from '../Losers/Losers';

function Players( name ) {
  
  return (

    <div>
      <h2>{name.name}</h2>
      <Winners />
      <Losers />
    </div>
  );
  }

export default Players;
