import { StyleSheet, View } from "react-native";
import Container from "../ui/Container";
import WorkoutsList from "../features/workout/WorkoutsList";
import Button from "../ui/Button";
import Label from "../ui/Label";
import { HomeScreenNavigationProp } from "../types";

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home = ({ navigation }: HomeProps) => {
  return (
    <Container>
      <Button onPress={() => navigation.navigate("New Workout")}>
        <Label icon="plus-circle" title="New Workout" color="#fff" />
      </Button>
      <View style={styles.workoutList}>
        <WorkoutsList />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  workoutList: {
    marginTop: 20,
  },
});

export default Home;
