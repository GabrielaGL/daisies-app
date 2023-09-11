import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../views/Login";
import SignUp from "../views/SignUp";
import BottomNavBar from "../components/BottomNavBar";
import JeweleryCards from "../components/JeweleryCards";
import ElectronicsCards from "../components/ElectronicsCards";
import MensClothingCards from "../components/MensClothingCards";
import WomensClothingCards from "../components/WomensClothing";
import Details from "../views/Details";

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
          name="Sign Up"
          component={SignUp}
          options={{
            headerTintColor: "#ADBDE6",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#ADBDE6" },
          }}
        />

        <Stack.Screen name="FakeStore" component={BottomNavBar} />

        <Stack.Screen
          name="Jewelery"
          component={JeweleryCards}
          options={{
            headerTintColor: "#333333",
            headerStyle: { backgroundColor: "#ADBDE6" },
          }}
        />

        <Stack.Screen
          name="Electronics"
          component={ElectronicsCards}
          options={{
            headerTintColor: "#333333",
            headerStyle: { backgroundColor: "#ADBDE6" },
          }}
        />

        <Stack.Screen
          name="Men's Clothing"
          component={MensClothingCards}
          options={{
            headerTintColor: "#333333",
            headerStyle: { backgroundColor: "#ADBDE6" },
          }}
        />

        <Stack.Screen
          name="Women's Clothing"
          component={WomensClothingCards}
          options={{
            headerTintColor: "#333333",
            headerStyle: { backgroundColor: "#ADBDE6" },
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "##FFF9F6",
            headerStyle: { backgroundColor: "#ADBDE6" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
