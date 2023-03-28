import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Exercise as TExercise } from "../../types";
import { getExercise } from "../../utils";
import Card from "../../ui/Card";

interface ExerciseProps {
  exercise: TExercise;
}

// TODO: Refactor
const Exercise = ({ exercise: { id, sets } }: ExerciseProps) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.exerciseText}>
          {getExercise(id) ?? "Unknown exercise"}
        </Text>
        {sets.map((set) => (
          <View key={set.order} style={styles.set}>
            <Text>{set.order}</Text>
            <View style={styles.weight}>
              <Text style={styles.text}>{set.weight} kg</Text>
            </View>
            <Feather name="x" size={24} color="black" />
            <Text style={styles.text}>{set.reps}</Text>
          </View>
        ))}
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
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  text: {
    backgroundColor: "#f4f4f5",
    minWidth: 50,
    borderRadius: 5,
    overflow: "hidden",
    padding: 5,
    textAlign: "center",
  },
  weight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default Exercise;
