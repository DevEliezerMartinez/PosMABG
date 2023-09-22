import { configureStore } from '@reduxjs/toolkit'
import userData from '../features/Auth/AuthSlice'

export const store = configureStore({
  reducer: {
    userData: userData,
  },
})