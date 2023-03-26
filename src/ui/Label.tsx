import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

interface LabelProps {
  icon: keyof typeof Feather.glyphMap;
  title: string;
}

const Label = ({ icon, title }: LabelProps) => {
  return (
    <View style={styles.container}>
      <Feather name={icon} size={16} color="black" />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
  },
});

export default Label;