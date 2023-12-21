import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {
  AddScreen,
  HabitScreen,
  HomeScreen,
  Profile,
  TodayScreen,
} from "../screens";
import { COLORS } from "../constants/theme";

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
        tabBarActiveTintColor: COLORS.purple,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            // color = focused ? COLORS.purple3 : COLORS.gray;
          } else if (route.name === "Today") {
            iconName = focused ? "today" : "today-outline";
            // color = focused ? COLORS.purple3 : COLORS.gray;
          } else if (route.name === "Habit") {
            iconName = focused ? "alarm" : "alarm-outline";
            // color = focused ? COLORS.purple3 : COLORS.gray;
          } else if (route.name === "Add") {
            iconName = focused ? "add-circle" : "add-circle";
            // color = focused ? COLORS.purple3 : COLORS.gray;
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
            // color = focused ? COLORS.purple3 : COLORS.gray;
          }

          return <Ionicons name={iconName} size={size * 1.12} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Habit" component={HabitScreen} />
      <Tab.Screen name="Profile" component={HabitScreen} />
    </Tab.Navigator>
  );
}
