import axios from 'axios';
import { create } from 'zustand';

const useStore = create(( set )=>({

    winners: 0,

    aceCount: ( delta )=>{
        set(( state )=>({ winners: state.winners + delta}))
      }
}))
 
export default useStore; 