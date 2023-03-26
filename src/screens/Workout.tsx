import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { format, formatDuration } from "date-fns";
import { selectWorkout } from "../features/workout/workoutSlice";
import { RootState } from "../app/store";
import { WorkoutScreenRouteProp } from "../types";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Label from "../ui/Label";
import Exercise from "../features/workout/Exercise";

interface WorkoutProps {
  route: WorkoutScreenRouteProp;
}

const Workout = ({ route }: WorkoutProps) => {
  const { id } = route.params;

  const workout = useSelector((state: RootState) => selectWorkout(state, id));
  const { date, duration, exercises } = workout;

  return (
    <Container>
      <View style={styles.container}>
        <Card>
          <Text style={styles.dateText}>{format(date, "PPp")}</Text>
          <Label icon="clock" title={formatDuration(duration)} />
        </Card>
        <View>
          <Text style={styles.numExercisesText}>
            {exercises.length} exercises
          </Text>
          <FlatList
            data={exercises}
            renderItem={({ item }) => <Exercise exercise={item} />}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
  dateText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  duration: {
    flexDirection: "row",
  },
  numExercisesText: {
    color: "#71717a",
    marginBottom: 4,
  },
});

export default Workout;
