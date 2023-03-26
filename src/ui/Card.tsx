import { ReactNode } from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";

interface CardProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const Card = ({ style, children }: CardProps) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});

export default Card;
