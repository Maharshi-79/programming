import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userinsert = createAsyncThunk('userinsert', async (data)=>{
    const res = await axios.post("http://localhost:3001/users",data);
    return res;
});

export const userdelete = createAsyncThunk('userdelete', async (id)=>{
    const res = await axios.delete(`http://localhost:3001/users/${id}`);
    return res;
});

export const userupdate = createAsyncThunk('userupdate', async (data)=>{
    const res = await axios.put(`http://localhost:3001/users/${data.id}`,data);
    return res;
});
export const userget = createAsyncThunk('userget', async ()=>{
    const res = await axios.get("http://localhost:3001/users");
    return res.data;
});


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: []
  },
  reducers: {
  
},
    extraReducers:(builder)=>{
        builder.addCase(userget.fulfilled,(state,action)=>{
            state.user = action.payload;
        })
    }
});


export const { } = userSlice.actions;
export default userSlice.reducer;


