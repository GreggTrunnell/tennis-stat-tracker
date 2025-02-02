import axios from 'axios';
import { create } from 'zustand';

const useStore = create(( set )=>({
    player: {
      first_name: '',
      last_name: '',
      playing_hand: '',
      racquet_brand: '',
      country: ''
    },
    messages: [],
    fetchMessges: ()=>{
      axios.get( '/api/messages' )
      .then(( response )=>{
        console.log('get from store', response.data )
        set(( state )=> ({ messages: response.data }));
      }).catch(( err )=>{
        console.log('error on get in store', err )
      })
    }
}))
 
export default useStore; 