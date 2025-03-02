import axios from "axios";
import useStore from "../zustand/store";

function Message( message ) {

  const  getMessages = useStore(( state )=> state. getMessages );

  function deleteMe(){
  //  getting 404 at (`/api/messages?id=${ message.id }`)
    axios.delete(`/api/messages`)
    .then(( response )=>{
      console.log('back from delete', response.data )
      getMessages();
    }).catch(( err )=>{
      console.log('err in todoitem delete', err)
    })
  }

  return (
     <div className='Message'>
      <h1>{ message.from } { message.message }</h1>
        <button onClick={ deleteMe }>Delete</button>
    </div>
  );
  }

export default Message;
