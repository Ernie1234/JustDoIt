import { Text } from "react-native";
import { Habits, HeaderBar, Screen } from "../components";

const HomeScreen = () => {
  return (
    <Screen>
      <HeaderBar />
      {/* my task component */}
      <Habits />
    </Screen>
  );
};

export default HomeScreen;
