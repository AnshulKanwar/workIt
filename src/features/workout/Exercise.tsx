import { StyleSheet } from "react-native";
import { View, Text, FlatList } from "react-native";
import { Exercise as TExercise } from "../../types";
import { getExercise } from "../../utils";
import Card from "../../ui/Card";

interface ExerciseProps {
  exercise: TExercise;
}

const Exercise = ({ exercise: { id, sets } }: ExerciseProps) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.exerciseText}>{getExercise(id) ?? "Unknown exercise"}</Text>
        <FlatList
          data={sets}
          renderItem={({ item: { order, weight, reps } }) => (
            <View style={styles.set}>
              <Text>{order}</Text>
              <Text>{weight} kg</Text>
              <Text>x</Text>
              <Text>{reps}</Text>
            </View>
          )}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  exerciseText: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 8,
  },
  set: {
    flexDirection: "row",
    gap: 5,
  },
});

export default Exercise;
