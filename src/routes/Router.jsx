import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../views/Login";
import SignUp from "../views/SignUp";
import BottomNavBar from "../components/BottomNavBar";
import JeweleryCards from "../components/jeweleryCards";
import ElectronicsCards from "../components/ElectronicsCards";
import MensClothingCards from "../components/MensClothingCards";
import WomensClothingCards from "../components/WomensClothing";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTintColor: "#ADBDE6",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#ADBDE6" },
          }}
        />
        <Stack.Screen
          name="Registro"
          component={SignUp}
          options={{
            headerTintColor: "#ADBDE6",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#ADBDE6" },
          }}
        />

        <Stack.Screen name="BottomNavBar" component={BottomNavBar} />

        <Stack.Screen
          name="Joyería"
          component={JeweleryCards}
          options={{
            headerTintColor: "#333333",
            headerStyle: { backgroundColor: "#ADBDE6" },
          }}
        />

        <Stack.Screen
          name="Electrónica"
          component={ElectronicsCards}
          options={{
            headerTintColor: "#333333",
            headerStyle: { backgroundColor: "#ADBDE6" },
          }}
        />

        <Stack.Screen
          name="Ropa de Hombre"
          component={MensClothingCards}
          options={{
            headerTintColor: "#333333",
            headerStyle: { backgroundColor: "#ADBDE6" },
          }}
        />

        <Stack.Screen
          name="Ropa de Mujer"
          component={WomensClothingCards}
          options={{
            headerTintColor: "#333333",
            headerStyle: { backgroundColor: "#ADBDE6" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
