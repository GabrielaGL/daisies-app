import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../views/Home";
import Categories from "../views/Categories";
import Shop from "../views/Shop";

// Screen names
const homeName = "Principal";
const categoriesName = "Categorías";
const shopName = "Carrito";

const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => {
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName === "Principal") {
              iconName = focused ? "home" : "home-outline";
            } else if (routeName === "Categorías") {
              iconName = focused ? "list" : "list-ouline";
            } else if (routeName === "Carrito") {
              iconName = focused ? "cart" : "cart-ouline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          };
        }}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={categoriesName} component={Categories} />
        <Tab.Screen name={shopName} component={Shop} />
      </Tab.Navigator>
  );
};

export default BottomNavBar;
