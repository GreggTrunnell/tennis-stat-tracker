import { useState } from "react";
import axios from "axios";
import useStore from "../zustand/store";

function Messages( ) {

  const fetchMessges = useStore(( state )=> state.fetchMessges )
  const messages = useStore(( state )=> state.messages)
  
  const [ message, setMessage ] = useState({ from: '', message: ''})
  function createNewMessage(){
    axios.post( '/api/messages', message )
    .then(( response )=>{
      fetchMessges();
    }).catch(( err )=>{
      console.log("error in post message", err)
    })
  }

  return (
     <div className='Messages'>
      <p>New Message</p>
      <input text="text" placeholder="From" onChange={(e)=>{ setMessage({ ...message, from: e.target.value })}}/>
      <input text="text" placeholder="New Message" onChange={(e)=>{ setMessage({ ...message, message: e.target.value })}}/>
      <button onClick={ createNewMessage }>Send</button>
      {
        messages.map(( message, index )=>(
          <div key={ index }>
            <div>{ JSON.stringify( messages )}</div>
            <p>
              <strong>From:</strong> { message.from }
            </p>
            <p>
              <strong>From:</strong> { message.message }
            </p>
          </div>
        ))
      }
    </div>
  );
  }

export default Messages;
