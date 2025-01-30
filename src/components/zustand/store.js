import { create } from 'zustand';

const userStore = create(( set )=>({
    player: {
      first_name: '',
      last_name: '',
      playing_hand: '',
      racquet_brand: '',
      country: ''
    },   
    match_stats: {
      points: 0,
      ace: 0,
      fh_winners: 0,
      bh_winners: 0,
      double_faults: 0,
      fh_losers: 0,
      bh_losers: 0
    }
}))
 
export default userStore; 