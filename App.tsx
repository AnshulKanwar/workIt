import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import WorkoutsList from "./src/features/workout/WorkoutsList";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>Your Workouts</Text>
          <WorkoutsList />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f0f1f4",
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },
});
