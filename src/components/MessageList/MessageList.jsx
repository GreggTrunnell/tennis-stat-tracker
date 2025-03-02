import useStore from "../zustand/store";
import Message from "../Message/Message";

function MessageList() {

  const messages = useStore(( state )=> state.messages )
  
  return (
     <div className='MessageList'>
      <p>Messages</p>
      {
        messages.map(( message, index )=>(
          <Message key={ index } message={ message.message } />
        ))
      }
    </div>
  );
  }

export default MessageList;
