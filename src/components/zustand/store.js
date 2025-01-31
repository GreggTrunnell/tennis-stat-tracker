import { create } from 'zustand';

const useStore = create(( set )=>({
    player: {
      first_name: '',
      last_name: '',
      playing_hand: '',
      racquet_brand: '',
      country: '',
    },
    updatePlayer: ( newData )=>
      set(( state )=>({
        player: { ...state.player, ...newData },
      }))
}))
 
export default useStore; 