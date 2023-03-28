import { View, Text, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Set as TSet } from "../../types";

interface SetProps {
  set: TSet;
  handleChangeWeight: (order: number, s: string) => void;
  handleChangeReps: (order: number, s: string) => void;
}

const Set = ({ set, handleChangeWeight, handleChangeReps }: SetProps) => {
  return (
    <View style={styles.set}>
      <Text>{set.order}</Text>
      <View style={styles.weight}>
        <TextInput
          style={styles.inputField}
          placeholder="0"
          value={`${set.weight}`}
          onChangeText={(s) => handleChangeWeight(set.order, s)}
          keyboardType="number-pad"
        />
        <Text>Kg</Text>
      </View>
      <Feather name="x" size={24} color="black" />
      <TextInput
        style={styles.inputField}
        placeholder="0"
        value={`${set.reps}`}
        onChangeText={(s) => handleChangeReps(set.order, s)}
        keyboardType="number-pad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  set: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  inputField: {
    backgroundColor: "#f4f4f5",
    minWidth: 50,
    borderRadius: 5,
    overflow: "hidden",
    padding: 5,
    textAlign: "center",
  },
  weight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default Set;
