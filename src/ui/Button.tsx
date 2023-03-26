import { ReactNode } from "react";
import { Pressable, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface ButtonProps {
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const Button = ({ onPress, buttonStyle, children }: ButtonProps) => {
  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3b82f6",
    padding: 14,
    borderRadius: 6,
  },
});

export default Button;
