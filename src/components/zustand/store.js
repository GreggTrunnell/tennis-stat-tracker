import { create } from 'zustand';

const userStore = create(( set )=>({
    player: {
      first_name: '',
      last_name: '',
      playing_hand: '',
      racquet_brand: '',
      country: ''
    }
}))
 
export default userStore; 