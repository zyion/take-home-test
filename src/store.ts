import { configureStore } from '@reduxjs/toolkit'
import cocktailSlice from './cocktailReducer'

export const store = configureStore({
  reducer: cocktailSlice,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
