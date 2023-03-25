import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface Exercise {
  id: number,
  sets: {
    order: number;
    weight: number;
    reps: number;
  }[]
}

export interface Workout {
  id: number;
  date: Date;
  duration: Duration;
  exercises: Exercise[];
}

export type RootStackParamList = {
  Home: undefined,
  Workout: { id: number }
}

export type WorkoutScreenRouteProp = RouteProp<RootStackParamList, 'Workout'>
export type WorkoutScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Workout'>