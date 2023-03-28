import { useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { format } from "date-fns";
import uuid from "react-native-uuid";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Label from "../ui/Label";
import ExerciseList from "../features/workout/ExerciseList";
import EditExercise from "../features/workout/EditExercise";
import { Exercise, NewWorkoutNavigationProp } from "../types";
import { useDispatch } from "react-redux";
import { addWorkout } from "../features/workout/workoutSlice";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface NewWorkoutProps {
  navigation: NewWorkoutNavigationProp
}

const NewWorkout = ({ navigation }: NewWorkoutProps) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isExerciseListVisible, setIsExerciseListVisible] = useState(false);

  const dispatch = useDispatch();

  const handleAddExercise = (exerciseId: number) => {
    setExercises((prev) => [...prev, { id: exerciseId, sets: [] }]);
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

  const handleChangeWeight = (exerciseId: number, order: number, weight: string) => {
    let state = [...exercises]
    state.map(exercise => {
      if (exercise.id === exerciseId) {
        exercise.sets[order - 1].weight = Number(weight)
      } else {
        return exercise
      }
    })

    setExercises(state)
  }

  const handleChangeReps = (exerciseId: number, order: number, reps: string) => {
    let state = [...exercises]
    state.map(exercise => {
      if (exercise.id === exerciseId) {
        exercise.sets[order - 1].reps = Number(reps)
      } else {
        return exercise
      }
    })

    setExercises(state)
  }

  const saveWorkout = () => {
    dispatch(
      addWorkout({
        id: uuid.v4() as string,
        date: Date(),
        duration: {},
        exercises,
      })
    );
    
    navigation.navigate("Home")
  };

  return (
    <KeyboardAwareScrollView extraHeight={200}>
      <Container style={styles.container}>
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

        <Button onPress={saveWorkout}>
          <Label icon="save" title="Save Workout" color="#fff" />
        </Button>

        <View style={styles.exercises}>
          {exercises.map((exercise) => (
            <EditExercise
              key={exercise.id}
              exercise={exercise}
              handleAddSet={handleAddSet}
              handleChangeWeight={handleChangeWeight}
              handleChangeReps={handleChangeReps}
            />
          ))}
          <Button onPress={() => setIsExerciseListVisible(true)}>
            <Label icon="plus-circle" title="Add Exercise" color="#fff" />
          </Button>
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
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 25
  },
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
    gap: 12,
  },
  exerciseList: {
    marginTop: 30,
    marginHorizontal: 20,
  },
});

export default NewWorkout;
