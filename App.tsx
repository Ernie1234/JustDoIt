import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import ScreenNavigation from "./navigations";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#862eff" />
      <ScreenNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
