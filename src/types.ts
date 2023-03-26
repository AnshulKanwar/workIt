import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface Workout {
  id: string;
  date: string;
  duration: Duration;
  exercises: Exercise[];
}

export interface Exercise {
  id: number;
  sets: Set[];
}

export interface Set {
  order: number;
  weight: number;
  reps: number;
}

export type RootStackParamList = {
  Home: undefined;
  Workout: { id: string };
  "New Workout": undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type WorkoutScreenRouteProp = RouteProp<RootStackParamList, "Workout">;
export type WorkoutScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Workout"
>;

export type NewWorkoutScreenRouteProp = RouteProp<
  RootStackParamList,
  "New Workout"
>;
