import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";
import exercises from "../../exercises.json";

interface ExerciseListProps {
  handlePress: (exerciseId: number) => void;
}

const ExerciseList = ({ handlePress }: ExerciseListProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select an exercise</Text>
      <View style={styles.list}>
        <FlatList
          data={exercises}
          renderItem={({ item: { id, name } }) => (
            <Pressable onPress={() => handlePress(id)}>
              <Text style={styles.listItem}>{name}</Text>
            </Pressable>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  list: {
    borderRadius: 10,
    overflow: "hidden",
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
