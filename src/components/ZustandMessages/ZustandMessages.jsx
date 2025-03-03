
import useStore from "../Store/store";
import { useEffect } from "react";

function ZustandMessages() {

  
  // useEffect(() => {
  //   getMessages();
  // }, []);
  
  const messages = useStore(( state )=> state.messages );
  const getMessages= useStore(( state )=> state.getMessages );

  return (
     <div className='ZustandMessages'>
      <p>Stringify below:</p>
      <p>{JSON.stringify(messages)}</p>
      <button onClick={getMessages}>Get</button>
      <div>
        {messages.map(( message, index )=>(
          <div key={index}>
            <p>{message.from}</p>
            <p>{message.message}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
  }

export default ZustandMessages;
