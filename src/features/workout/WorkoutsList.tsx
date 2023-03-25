import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { selectAllWorkouts } from "./workoutSlice";
import WorkoutsListRowItem from "./WorkoutsListRowItem";

const WorkoutsList = () => {
  const workouts = useSelector(selectAllWorkouts);

  return (
    <FlatList
      data={workouts}
      contentInsetAdjustmentBehavior="automatic"
      renderItem={({ item }) => <WorkoutsListRowItem workout={item} />}
    />
  );
};

export default WorkoutsList;
