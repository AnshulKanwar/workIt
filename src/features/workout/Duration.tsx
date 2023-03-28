import { useEffect } from "react";
import { Text } from "react-native";

interface DurationProps {
  time: number
  handleUpdate: () => void
}

const Duration = ({ time, handleUpdate }: DurationProps) => {

  useEffect(() => {
    const intervalId = setInterval(handleUpdate, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return <Text>{time}</Text>;
};

export default Duration;
