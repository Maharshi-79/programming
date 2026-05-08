import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    number:0
  },
  reducers: {
    // Define your reducers here
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      state.number -= 1;
    },
    
  }
});

export const { increment, decrement } = userSlice.actions;
export default userSlice.reducer

//  increment: (state) => {
//       return({...state,number:state.number+1})
//     }