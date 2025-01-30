import { useState } from 'react';
import userStore from "../zustand/store";
import axios from "axios";

function Winners() {
  //setup a getter and setter with useState(a hook in react)

  const match_stats=userStore(( state )=> state.match_stats );

  const [myPoints, setMyPoints] = useState(0);
  const [aceCount, setAceCount] = useState(0);
  const [forehandWinners, setForehandWinners] = useState(0);
  const [backhandWinners, setBackhandWinners] = useState(0);
  const [ winners, setWinners ] = useState(0);
  

  const addPoint = () => {
    console.log("Add point")
    setMyPoints(myPoints + 1)};
  
  const addAce = ()=>{
    console.log('Ace')
    setAceCount(aceCount + 1)};

  const addForehandWinner=()=>{
    console.log('Forehand Winner')
    setForehandWinners(forehandWinners + 1)};

  const addBackhandWinner=()=>{
    console.log('Backhand Winner')
    setBackhandWinners(backhandWinners + 1)};

  const addWinner=()=>{
      setWinners( winners + 1 );}  

//! some functionality but need to correct queryText in stats.router
  function addStats(e){
    console.log('stat hit')
    const objectToSend = {
      points: match_stats.points
    }
  axios.put('/api/match_stats', objectToSend ).then(( response )=>{
    console.log('put response', response.data )
  }).catch(( err )=>{
    console.log("error in put/winners", err )
  })}    


  return (
    <div>
      <div className="winners-stats" >
      <h3>Winners: { winners }</h3>
      <p>{ myPoints }: Points</p>
      <p>{ aceCount }: Aces</p>
      <p>{ forehandWinners }: Forehand </p>
      <p>{ backhandWinners }: Backhand </p> 
      <button onChange={ (e)=>match_stats.points = e.target.value  } onClick={ ()=> { addPoint() }}>Point</button>
      <button onClick={ ()=> { addAce(); addWinner() }}>Ace</button>
      <button onClick={ ()=> { addForehandWinner(); addWinner() }}>Forehand</button>
      <button onClick={ ()=> { addBackhandWinner(); addWinner() }}>Backhand</button>
      <button onClick={ addStats }>PUT stats</button>
    </div>
    </div>
  );
  }

export default Winners;
