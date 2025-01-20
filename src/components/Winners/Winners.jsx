import { useState, useEffect } from 'react'

function Winners() {
  //setup a getter and setter with useState(a hook in react)
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

  return (
    <div>
      <h3>Winners</h3>
      <p>{ myPoints }: Points</p>
      <p>{ aceCount }: Aces</p>
      <p>{ forehandWinners }: Forehand </p>
      <p>{ backhandWinners }: Backhand </p> 
      <button onClick={ ()=> { addPoint() }}>Point</button>
      <button onClick={ ()=> { addAce(); addWinner() }}>Ace</button>
      <button onClick={ ()=> { addForehandWinner(); addWinner() }}>Forehand</button>
      <button onClick={ ()=> { addBackhandWinner(); addWinner() }}>Backhand</button>
      <p>Winners: { winners }</p>
    </div>
  );
  }

export default Winners;
