import { Text } from "react-native";
import { Habits, HeaderBar, Screen, Tasks } from "../components";

const HomeScreen = () => {
  return (
    <Screen>
      <HeaderBar />
      {/* my task component */}
      <Habits />
      <Tasks />
    </Screen>
  );
};

export default HomeScreen;
