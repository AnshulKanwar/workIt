import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  Pressable,
  Keyboard,
} from "react-native";
import { format } from "date-fns";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Label from "../ui/Label";
import ExerciseList from "../features/workout/ExerciseList";
import EditExercise from "../features/workout/EditExercise";
import { Exercise } from "../types";

const NewWorkout = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isExerciseListVisible, setIsExerciseListVisible] = useState(false);

  const handleAddExercise = (exerciseId: number) => {
    setExercises((prev) => [{ id: exerciseId, sets: [] }, ...prev]);
    setIsExerciseListVisible(false);
  };

  // TODO: Can we do it better?
  const handleAddSet = (exerciseId: number, order: number) => {
    let state = [...exercises];
    state.map((exercise) => {
      if (exercise.id === exerciseId) {
        exercise.sets.push({ order, weight: 0, reps: 0 });
      } else {
        return exercise;
      }
    });

    setExercises(state);
  };

  return (
    <Pressable onPress={() => Keyboard.dismiss()}>
      <Container>
        <Card>
          <Text style={styles.titleText}>{format(new Date(), "PPp")}</Text>
          <View style={styles.info}>
            <View>
              <Text>Duration</Text>
              <Text>00:00</Text>
            </View>
            <View>
              <Text>Exercises</Text>
              <Text>{exercises.length}</Text>
            </View>
          </View>
        </Card>

        <View style={styles.exercises}>
          <Button onPress={() => setIsExerciseListVisible(true)}>
            <Label icon="plus-circle" title="Add Exercise" color="#fff" />
          </Button>
          <FlatList
            data={exercises}
            renderItem={({ item }) => (
              <EditExercise exercise={item} handleAddSet={handleAddSet} />
            )}
          />
        </View>
        <Modal
          visible={isExerciseListVisible}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => setIsExerciseListVisible(false)}
          onDismiss={() => setIsExerciseListVisible(false)}
        >
          <View style={styles.exerciseList}>
            <ExerciseList handlePress={handleAddExercise} />
          </View>
        </Modal>
      </Container>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  exercises: {
    marginTop: 30,
    gap: 12,
  },
  exerciseList: {
    marginTop: 30,
    marginHorizontal: 20,
  },
});

export default NewWorkout;
