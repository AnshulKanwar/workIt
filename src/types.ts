export interface Workout {
  id: number;
  date: Date;
  duration: Duration;
  exercises: {
    exerciseId: number;
    sets: {
      order: number;
      weight: number;
      reps: number;
    }[];
  }[];
}
