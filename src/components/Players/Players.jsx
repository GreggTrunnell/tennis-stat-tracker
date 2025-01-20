import { useState } from 'react'
import Winners from '../Winners/Winners';
import Errors from '../Errors/Errors';

function Players(props) {
  
  return (

    <div>
      <h2>{props.name}</h2>
      <Winners />
      <Errors />
    </div>
  );
  }

export default Players;
