import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../views/Login";
import SignUp from "../views/SignUp";
import BottomNavBar from "../components/BottomNavBar";


const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={SignUp} />
        <Stack.Screen name="BottomNavBar" component={BottomNavBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
