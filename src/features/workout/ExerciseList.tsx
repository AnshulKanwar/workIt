import { FlatList, View, Text, StyleSheet } from "react-native";
import exercises from "../../exercises.json";

const ExerciseList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={({ item: { name } }) => (
          <Text style={styles.listItem}>{name}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden"
  },
  listItem: {
    backgroundColor: "#f4f4f5",
    padding: 10,
  },
  separator: {
    backgroundColor: "#e4e4e7",
    height: 1,
  },
});

export default ExerciseList;
