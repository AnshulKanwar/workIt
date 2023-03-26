import { useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { format } from "date-fns";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Container from "../../ui/Container";
import Label from "../../ui/Label";
import ExerciseList from "./ExerciseList";

const AddWorkout = () => {
  const [isExerciseListVisible, setIsExerciseListVisible] = useState(false);

  return (
    <Container>
      <Card style={styles.header}>
        <Text style={styles.titleText}>{format(new Date(), "PPp")}</Text>
        <View style={styles.info}>
          <View>
            <Text>Duration</Text>
            <Text>00:00</Text>
          </View>
          <View>
            <Text>Exercises</Text>
            <Text>0</Text>
          </View>
        </View>
      </Card>

      <View>
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
          <ExerciseList />
        </View>
      </Modal>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
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
  exerciseList: {
    marginTop: 30,
    marginHorizontal: 20,
  },
});

export default AddWorkout;
