import { createSlice } from '@reduxjs/toolkit';


// This data will be accessible through the entire application globally so we don't have to pass state down through other components
const initialState = {
  user: null,
  token: null,
  posts: [],
};

// Functions that modify the global state
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.user;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) =>{
      if(state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error('user friends does not exist D:');
      }
    }
  }
});

export const { setLogin, setLogout, setFriends } = authSlice.actions;
export default authSlice.reducer;