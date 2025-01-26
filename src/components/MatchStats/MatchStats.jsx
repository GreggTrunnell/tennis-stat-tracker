import Players from "../Players/Players";

function MatchStats( ) {
  
  return (
    <div className="container text-center">
    <div className="row">
      <div className="col">
      <Players name="Keys" />
      </div>
      <img className="w-50 h-50" src="public/images/ball_kid copy.png" />
      <div className="col">
        <Players name="Sabalenka" />
      </div>
    </div>
  </div>
  );
  }

export default MatchStats;

