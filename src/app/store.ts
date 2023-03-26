import { configureStore } from '@reduxjs/toolkit'
import workoutReducer from '../features/workout/workoutSlice'

const store = configureStore({
  reducer: {
    workouts: workoutReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>