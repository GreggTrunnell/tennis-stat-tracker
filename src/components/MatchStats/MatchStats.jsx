import Players from "../Players/Players";
import Scoring from "../Scoring/Scoring";

function MatchStats( ) {
  //!this component is used as the link and will serve to setup a new match
  return (
    <div className="container text-center">
    <div className="row">
     <Scoring playerNames={{ player1: 'Serena Williams', player2: 'Rafael Nadal' }} />

      {/* <div className="col">
      <Players name="Keys" />
      </div>
      <img className="w-50 h-50" src="public/images/ball_kid copy.png" />
      <div className="col">
      <Players name="Sabalenka" />
      </div> */}
    </div>
  </div>
  );
  }

export default MatchStats;

