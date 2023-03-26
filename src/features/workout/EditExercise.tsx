import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { getExercise } from "../../utils";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import Label from "../../ui/Label";
import Set from "./Set";
import { Exercise as TExercise } from "../../types";

interface ExerciseProps {
  exercise: TExercise;
  handleAddSet: (exerciseId: number, order: number) => void;
}

const Exercise = ({ exercise: { id, sets }, handleAddSet }: ExerciseProps) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.exerciseText}>{getExercise(id)}</Text>
        <Button
          onPress={() => {
            let order = sets[sets.length - 1]?.order;
            order = order ? order + 1 : 1;
            handleAddSet(id, order);
          }}
          buttonStyle={styles.addSetButton}
        >
          <Label icon="plus-circle" title="Add Set" color="#fff" />
        </Button>
        <View style={styles.setsList}>
          {sets.map((set) => (
            <Set key={set.order} set={set} />
          ))}
        </View>
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
  addSetButton: {
    paddingVertical: 8,
  },
  setsList: {
    marginTop: 8,
  },
});

export default Exercise;
