import Winners from '../Winners/Winners';
import Losers from '../Losers/Losers';
import Scoring from '../Scoring/Scoring';

function Players( name ) {
  
  return (

    <div>
      <h2 className="players">{name.name}</h2>
      <Scoring />
      {/* <Winners />
      <br></br>
      <Losers /> */}
    </div>
  );
  }

export default Players;
