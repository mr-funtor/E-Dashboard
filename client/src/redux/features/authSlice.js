import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  user: "",
  error: "",
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn: (state,actions) => {
      state.isAuth = true;
      state.user= actions.payload.name
    },
    loggedOut: (state,actions)=>{
      state.isAuth = false;
      state.user= ""
    }
  },
})

// Action creators are generated for each case reducer function
export const { loggedIn,loggedOut} = authSlice.actions

export default authSlice.reducer