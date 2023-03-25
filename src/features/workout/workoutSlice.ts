import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    date: new Date(),
    duration: 1 * 60 * 60,
    exercises: [
      {
        exerciseId: 1,
        sets: [
          { order: 1, weight: 30.0, reps: 12 },
          { order: 2, weight: 35.0, reps: 10 },
          { order: 3, weight: 40.0, reps: 8 },
        ]
      },
      {
        exerciseId: 2,
        sets: [
          { order: 1, weight: 15.0, reps: 12 },
          { order: 2, weight: 17.5, reps: 10 },
          { order: 3, weight: 20.0, reps: 8 },
        ],
      },
    ],
  },
  {
    id: 2,
    date: new Date(),
    duration: 1.2 * 60 * 60,
    exercises: [
      {
        exerciseId: 3,
        sets: [
          { order: 1, weight: 70.0, reps: 12 },
          { order: 2, weight: 80.0, reps: 10 },
          { order: 3, weight: 90.0, reps: 8 },
          { order: 3, weight: 100.0, reps: 3 },
        ]
      },
      {
        exerciseId: 4,
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
  name: "workout",
  initialState,
  reducers: {},
});

export default workoutSlice.reducer
