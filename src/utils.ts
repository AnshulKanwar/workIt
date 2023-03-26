import exercises from "./exercises.json";

export const getExercise = (id: number): string | undefined => {
  return exercises.find((exercise) => exercise.id === id)?.name;
};
