import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/app/store";
import { RootStackParamList } from "./src/types";
import Home from "./src/screens/Home";
import Workout from "./src/screens/Workout";
import NewWorkout from "./src/screens/NewWorkout";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: "Your Workouts" }}
          />
          <Stack.Screen name="Workout" component={Workout} />
          <Stack.Screen
            name="New Workout"
            component={NewWorkout}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
