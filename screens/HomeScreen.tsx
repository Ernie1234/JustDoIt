import { Habits, HeaderBar, Screen, Tasks } from "../components";
import List from "../components/List";

const HomeScreen = () => {
  return (
    <>
      <HeaderBar />
      <Habits />
      <Tasks />
      <List />
    </>
  );
};

export default HomeScreen;
