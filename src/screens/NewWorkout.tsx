import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import { format } from "date-fns";
import uuid from "react-native-uuid";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Label from "../ui/Label";
import ExerciseList from "../features/workout/ExerciseList";
import EditExercise from "../features/workout/EditExercise";
import { Exercise } from "../types";
import { useDispatch } from "react-redux";
import { addWorkout } from "../features/workout/workoutSlice";

const NewWorkout = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isExerciseListVisible, setIsExerciseListVisible] = useState(false);

  const dispatch = useDispatch();

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

  const saveWorkout = () => {
    dispatch(
      addWorkout({
        id: uuid.v4() as string,
        date: Date(),
        duration: {},
        exercises,
      })
    );
  };

  return (
    <ScrollView>
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
          <Button onPress={saveWorkout}>
            <Label icon="save" title="Save Workout" color="#fff" />
          </Button>
          <Button onPress={() => setIsExerciseListVisible(true)}>
            <Label icon="plus-circle" title="Add Exercise" color="#fff" />
          </Button>
          {exercises.map((exercise) => (
            <EditExercise key={exercise.id} exercise={exercise} handleAddSet={handleAddSet} />
          ))}
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
    </ScrollView>
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
