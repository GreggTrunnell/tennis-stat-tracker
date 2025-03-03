import axios from 'axios';
import { create } from 'zustand';

const useStore = create(( set )=>({
    messages: [ ],
    getMessages: ()=>{
        axios.get( '/api/messages/zustand' )
        .then(( response )=>{
            console.log('back from get in store', response.data)
            set(( state )=>({ messages: response.data }));
        }).catch(( err )=>{
            console.log('error in get store', err );
        })
    },
    winners: 0,

    aceCount: ( delta )=>{
        set(( state )=>({ winners: state.winners + delta}))
      }
}))
 
export default useStore; 