import { ReactNode } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface ContainerProps {
  style?: StyleProp<ViewStyle>
  children: ReactNode;
}

const Container = ({ style, children }: ContainerProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
});

export default Container;
