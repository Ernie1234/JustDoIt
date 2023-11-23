import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import {
  AddScreen,
  HabitScreen,
  HomeScreen,
  Profile,
  TodayScreen,
} from "../screens";

export type tabParams = {
  Today: any;
  Habit: any;
  Add: any;
  Profile: any;
  Home: any;
};

const Tab = createBottomTabNavigator<tabParams>();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Today") {
            iconName = "tasks";
          } else if (route.name === "Habit") {
            iconName = "book-medical";
          } else if (route.name === "Add") {
            iconName = "plus";
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Habit" component={HabitScreen} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Ionicons name="md-person" size={24} color="gray" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
