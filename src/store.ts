import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from "./features/workout/workoutSlice";

export default configureStore({
  reducer: {
    workouts: workoutReducer,
  },
});
