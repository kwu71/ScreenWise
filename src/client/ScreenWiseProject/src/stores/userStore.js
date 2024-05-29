import Axios from 'axios';

import { create } from 'zustand';

const useUserStore = create((set) => ({

  user: null,
  fetchUser: async () => {
    try {
      const response = await Axios.get(`http://localhost:3000/auth/profile`, { withCredentials: true });
      set({user: response.data});
    } catch (error) {
      console.error('Error fetching user profile', error);
    }
  },
  logout: async () => {
    try {
      const serverResponse = await Axios.post(`http://localhost:3000/auth/logout`, { withCredentials: true });
      set({user: null});
      if(serverResponse.status === 200){
        window.location.href = 'http://localhost:5173/login'
      }
    } catch (error) {
      console.error('Error logging out', error);
    }
  }

}));

export default useUserStore;