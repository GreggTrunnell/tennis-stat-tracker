import { useEffect } from "react";
import useStore from "../zustand/store";

function MessagesList( ) {
  
  const fetchMessges = useStore(( state )=> state.fetchMessges )
  const messages = useStore(( state )=> state.messages)

  useEffect(()=>{
    fetchMessges();
  }, []);

  return (
     <div className='MessagesList'>
      {
        messages.map(( message, index )=>(
          <div key={ index }>
            {/* <div>{ JSON.stringify( messages )}</div> */}
            <p>
              <strong>From:</strong> { message.from }
            </p>
            <p>
              <strong>Message:</strong> { message.message }
            </p>
          </div>
        ))
      }
    </div>
  );
  }

export default MessagesList;
