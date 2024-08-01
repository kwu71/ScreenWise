import Axios from 'axios';
import { create } from 'zustand';

const useUserStore = create((set) => ({

  user: null,
  isLoading: true,

  fetchUser: async () => {
    try {
      const response = await Axios.get(`http://localhost:3000/auth/profile`, { withCredentials: true });
      set({user: response.data, isLoading: false });
    } catch (error) {
      console.error('Error fetching user profile', error);
      set({ user: null, isLoading: false });
    }
  },

  logout: async () => {
    try {
      const serverResponse = await Axios.post(`http://localhost:3000/auth/logout`, { withCredentials: true });
      if(serverResponse.status === 200){
        set({user: null});
      }
    } catch (error) {
      console.error('Error logging out', error);
    }
  }

}));

export default useUserStore;