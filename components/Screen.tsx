import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

type childrenProps = {
  children: React.ReactNode;
};
const Screen = ({ children }: childrenProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    //! flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default Screen;
