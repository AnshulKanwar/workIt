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
  handleChangeWeight: (id: number, order: number, s: string) => void;
  handleChangeReps: (id: number, order: number, s: string) => void;
}

const Exercise = ({
  exercise: { id, sets },
  handleAddSet,
  handleChangeWeight,
  handleChangeReps,
}: ExerciseProps) => {
  return (
    <Card style={styles.exercise}>
      <Text style={styles.exerciseText}>{getExercise(id)}</Text>
      <View>
        {sets.map((set) => (
          <Set
            key={set.order}
            set={set}
            handleChangeWeight={(order, s) => handleChangeWeight(id, order, s)}
            handleChangeReps={(order, s) => handleChangeReps(id, order, s)}
          />
        ))}
      </View>
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
    </Card>
  );
};

const styles = StyleSheet.create({
  exercise: {
    gap: 10,
  },
  exerciseText: {
    fontSize: 20,
    fontWeight: "500",
  },
  addSetButton: {
    paddingVertical: 8,
  },
});

export default Exercise;
