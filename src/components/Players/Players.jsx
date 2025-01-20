import Winners from '../Winners/Winners';
import Errors from '../Errors/Errors';

function Players( name ) {
  
  return (

    <div>
      <h2>{name.name}</h2>
      <Winners />
      <Errors />
    </div>
  );
  }

export default Players;
