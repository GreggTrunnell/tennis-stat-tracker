import { create } from 'zustand';

const userStore = create(( set )=>({
    player: {
      first_name: '',
      last_name: '',
      playing_hand: '',
      raquet_brand: ''
    }
}))
 
export default userStore; 