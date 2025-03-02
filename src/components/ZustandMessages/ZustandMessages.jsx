import useStore from "../zustand/store";


function ZustandMessages( ) {
  
  const messages = useStore(( state )=> state.messages );
  const getMessages= useStore(( state )=> state.getMessages );

  return (
     <div className='ZustandMessages'>
      <p>{JSON.stringify(messages)}</p>
      <p>{getMessages()}</p>
  
    </div>
  );
  }

export default ZustandMessages;
