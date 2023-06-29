import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nota from "./pages/Nota/Nota";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ToastAndroid } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabHome() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Nota" component={Nota} />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        /> */}

        <Stack.Screen
          options={{ headerShown: false }}
          name="Nota"
          component={Nota}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
