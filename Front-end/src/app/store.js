import { configureStore } from '@reduxjs/toolkit'
import userData from '../features/Auth/AuthSlice'
import listUsers from '../features/Info/listUsers'

export const store = configureStore({
  reducer: {
    userData: userData,
    listUsers: listUsers,
    
    
  },
})