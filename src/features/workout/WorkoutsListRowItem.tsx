import { View, Text, StyleSheet, Pressable } from "react-native";
import { format, formatDuration } from "date-fns";
import { Workout, WorkoutScreenNavigationProp } from "../../types";
import { useNavigation } from "@react-navigation/native";
import Card from "../../ui/Card";
import Label from "../../ui/Label";

interface WorkoutsListRowItemProps {
  workout: Workout;
}

const WorkoutsListRowItem = ({
  workout: { id, date, duration, exercises },
}: WorkoutsListRowItemProps) => {
  const navigation = useNavigation<WorkoutScreenNavigationProp>();

  return (
    <Pressable onPress={() => navigation.navigate("Workout", { id })}>
      <Card style={styles.container}>
        <Text style={styles.date}>{format(date, "PPp")}</Text>
        <View style={styles.info}>
          <Label icon="clock" title={formatDuration(duration)} />
          <View>
            <Text>{exercises.length} exercises</Text>
          </View>
        </View>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  date: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  duration: {
    flexDirection: "row",
    alignItems: "center",
  },
  durationText: {
    marginLeft: 4,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default WorkoutsListRowItem;
