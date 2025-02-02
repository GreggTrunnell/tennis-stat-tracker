import { useState } from "react";
import axios from "axios";
import MessagesList from "../MessagesList/MessagesList";

function Messages( ) {

  const [ message, setMessage ] = useState({ from: '', message: ''})
  function createNewMessage(){
    axios.post( '/api/messages', message )
    .then(( response )=>{
    }).catch(( err )=>{
      console.log("error in post message", err)
    })
  }

  return (
     <div className='Messages'>
      <p>New Message</p>
      <form>
        <input text="text" placeholder="From" onChange={(e)=>{ setMessage({ ...message, from: e.target.value })}}/>
        <input text="text" placeholder="New Message" onChange={(e)=>{ setMessage({ ...message, message: e.target.value })}}/>
        <button onClick={ createNewMessage }>Send</button>
      </form>
      <MessagesList />
    </div>
  );
  }

export default Messages;
