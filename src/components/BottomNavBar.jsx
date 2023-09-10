import React from "react";
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
      backBehavior={"none"}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#4A71C6",
        tabBarInactiveTintColor: "#ADBDE6",
        tabBarLabelStyle: { paddingBottom: 5, fontSize: 13 },
        tabBarStyle: { height: 60},
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName === "Principal") {
            iconName = focused ? "home" : "home-outline";
          } else if (routeName === "Categorías") {
            iconName = focused ? "list" : "list-outline";
          } else if (routeName === "Carrito") {
            iconName = focused ? "cart" : "cart-outline";
          }

          return <Ionicons name={iconName} size={28} color={color} />;
        },
      })}
    >
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={categoriesName} component={Categories} />
      <Tab.Screen name={shopName} component={Shop} />
    </Tab.Navigator>
  );
};

export default BottomNavBar;
