import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, SearchScreen, TaskDetails } from "../screens";
import MyTabs from "./Tab";

const Stack = createNativeStackNavigator();
export default function ScreenNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="All" component={MyTabs} />
        <Stack.Screen name="TaskDetails" component={TaskDetails} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
