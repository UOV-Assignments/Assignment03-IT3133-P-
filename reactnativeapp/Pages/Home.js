import React from "react";
import Course from "./Course";
import Subjects from "./Subjects";
import Profile from "./Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();
export default function Home({ route }) {
  // const { user } = route.params;
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Profile") {
              iconName = "person";
            } else if (route.name === "Courses") {
              iconName = "school";
            } else if (route.name === "Subjects") {
              iconName = "book";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Courses" component={Course} />
        <Tab.Screen name="Subjects" component={Subjects} />
      </Tab.Navigator>
    </>
  );
}
