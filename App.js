import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";

// Main pages to design/develop
import Feed from "./pages/Feed";
import Contact from "./pages/Contact";
import More from "./pages/More";

// Top Tab Navigation
const Tab = createMaterialTopTabNavigator();

// Stack Navigation
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let vIconLib; // Just indexing for different "icon font" libraries ie. Fontisto, Ionicons, FontAwesome
          if (route.name === "Feed") {
            iconName = "nav-icon-grid-a";
            vIconLib = 1;
          } else if (route.name === "Contact") {
            iconName = "md-people";
            vIconLib = 2;
          } else if (route.name === "More") {
            iconName = "ellipsis-v";
            vIconLib = 3;
          }
          // You can return any component that you like here!
          switch (
            vIconLib // I'm using these three "icon fonts" but feel free to add others if you have any icons in mind!
          ) {
            case 1:
              return (
                <Fontisto
                  style={{ paddingLeft: 4 }}
                  name={iconName}
                  size={20}
                  color={color}
                />
              );
            case 2:
              return (
                <Ionicons
                  style={{ paddingLeft: 1 }}
                  name={iconName}
                  size={25}
                  color={color}
                />
              );
            case 3:
              return (
                <FontAwesome
                  style={{ paddingLeft: 5 }}
                  name={iconName}
                  size={25}
                  color={color}
                />
              );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#37CE6A",
        inactiveTintColor: "gray",
        showIcon: true,
        tabStyle: {
          flexDirection: "row-reverse",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10,
        },
      }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Beanstalk" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
