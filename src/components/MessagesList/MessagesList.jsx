import { useState } from "react";
import axios from "axios";

function MessagesList( ) {
  const [messageList, setMessageList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const searchMessages =()=>{
    console.log('search query', searchQuery );
    axios.get(`/api/messages?q=${ searchQuery }`)
    .then(( response )=>{
      console.log('response from get messageList', response.data);
      setMessageList( response.data )
    }).catch(( err )=>{
      console.log('error in get messageList', err )
    })
  };

  return (
     <div className='MessagesList'>
      <input type="text" placeholder="Player's last name" value={ searchQuery }
      onChange={(e)=> setSearchQuery( e.target.value )} />
      <button onClick={ searchMessages }>Search</button>
      {
        messageList.map(( message, index )=>(
          <div key={ index }>
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
