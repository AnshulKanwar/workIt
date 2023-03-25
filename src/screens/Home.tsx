import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import WorkoutsList from "../features/workout/WorkoutsList";

const Home = () => {
  return <WorkoutsList />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f1f4",
    paddingHorizontal: 30,
  },
});

export default Home;
