import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { compareDesc } from "date-fns";
import uuid from "react-native-uuid";
import { RootState } from "../../app/store";
import { Workout } from "../../types";

const initialState: Workout[] = [
  {
    id: uuid.v4() as string,
    date: Date(),
    duration: { hours: 1 },
    exercises: [
      {
        id: 1,
        sets: [
          { order: 1, weight: 30.0, reps: 12 },
          { order: 2, weight: 35.0, reps: 10 },
          { order: 3, weight: 40.0, reps: 8 },
        ],
      },
      {
        id: 2,
        sets: [
          { order: 1, weight: 15.0, reps: 12 },
          { order: 2, weight: 17.5, reps: 10 },
          { order: 3, weight: 20.0, reps: 8 },
        ],
      },
    ],
  },
  {
    id: uuid.v4() as string,
    date: Date(),
    duration: { hours: 1, minutes: 30 },
    exercises: [
      {
        id: 3,
        sets: [
          { order: 1, weight: 70.0, reps: 12 },
          { order: 2, weight: 80.0, reps: 10 },
          { order: 3, weight: 90.0, reps: 8 },
          { order: 4, weight: 100.0, reps: 3 },
        ],
      },
      {
        id: 4,
        sets: [
          { order: 1, weight: 75.0, reps: 12 },
          { order: 2, weight: 85.0, reps: 10 },
          { order: 3, weight: 90.0, reps: 8 },
        ],
      },
    ],
  },
];

export const workoutSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    addWorkout(state, action: PayloadAction<Workout>) {
      state.push(action.payload);
    },
  },
});

export const { addWorkout } = workoutSlice.actions;

export default workoutSlice.reducer;

export const selectAllWorkouts = (state: RootState) =>
  state.workouts.slice().sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

// TODO: Error handling
export const selectWorkout = (state: RootState, id: string) =>
  state.workouts.find((workout) => workout.id === id);
