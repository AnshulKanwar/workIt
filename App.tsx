import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerLargeTitle: true,
            headerTransparent: true,
            headerBlurEffect: "systemMaterial",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: "Your Workouts"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
