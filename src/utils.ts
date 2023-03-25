import exercises from "./exercises.json"

export const getExercise = (id: number): string => {
  return exercises.find(exercise => exercise.id === id).name
}