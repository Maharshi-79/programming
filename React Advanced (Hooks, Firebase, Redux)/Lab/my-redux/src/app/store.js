import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
export default configureStore({
  reducer: {
    // Add your reducers here
    user:userSlice,
  }
})