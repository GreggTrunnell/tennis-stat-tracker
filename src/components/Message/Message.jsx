import { useState } from "react";
import axios from "axios";
import userStore from "../zustand/store";

function Message( ) {
  
  const [ message, setMessage ] = useState({ from: '', message: ''})
  function createNewMessage(){
    axios.post( '/api/message', message )
    .then(( response )=>{
      // fetchMessges();
    }).catch(( err )=>{
      console.log("error in post message", err)
    })
  }

  return (
     <div className='Message'>
      <p>New Message</p>
      <input text="text" placeholder="From" onChange={(e)=>{ setMessage({ ...message, from: e.target.value })}}/>
      <input text="text" placeholder="New Message" onChange={(e)=>{ setMessage({ ...message, message: e.target.value })}}/>

    </div>
  );
  }

export default Message;
