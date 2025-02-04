import { useState } from "react";
import axios from "axios";

//!make addNewMessage comp, message comp, and messageList comp like react todo project
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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchMessages();
    }
  };

  return (
     <div className='MessagesList'>
        <input type="text" placeholder="Player's last name" value={ searchQuery }
        onChange={(e)=> setSearchQuery( e.target.value )}
        onKeyDown={ handleKeyDown } />
        <button onClick={ searchMessages }>Search</button>
      {messageList.length === 0 ? (
        <p className="red-text">No results found.</p>
      ) : (
        messageList.map(( message, index )=>(
          <div key={index} >
            <p>
              <strong>From:</strong> { message.from }
            </p>
            <p>
              <strong>Message:</strong> { message.message }
            </p>
            <hr />
          </div>
        ))
     ) }
    </div>
  );
  }

export default MessagesList;
