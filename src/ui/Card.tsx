import { ReactNode } from "react"
import { View, StyleSheet } from "react-native"

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 20,
  }
})

export default Card