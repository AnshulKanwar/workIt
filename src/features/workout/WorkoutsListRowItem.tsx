import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { format, formatDuration } from "date-fns";
import { Workout } from "../../types";

interface WorkoutsListRowItemProps {
  workout: Workout;
}

const WorkoutsListRowItem = ({
  workout: { date, duration, exercises },
}: WorkoutsListRowItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{format(date, "PPp")}</Text>
      <View style={styles.info}>
        <View style={styles.duration}>
          <Feather name="clock" size={16} color="black" />
          <Text style={styles.durationText}>{formatDuration(duration)}</Text>
        </View>
        <View>
          <Text>{exercises.length} exercises</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 6,
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
