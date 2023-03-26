import { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";

interface ButtonProps {
  onPress?: () => void;
  children: ReactNode;
}

const Button = ({ onPress, children }: ButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
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
