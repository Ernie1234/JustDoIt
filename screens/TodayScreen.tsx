import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { format } from "date-fns";
import { COLORS } from "../constants/theme";

const TodayScreen = () => {
  const SIZE = Dimensions.get("window").width;
  //Date and calendar
  const today = new Date();
  const formattedDate = format(today, "MMMM dd,yyyy");

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={{ paddingTop: 15 }}> */}
      <View style={styles.header}>
        <View style={styles.date}>
          <Text style={styles.dateFormat}>{formattedDate}</Text>
          <Text style={styles.today}>today</Text>
        </View>
        <View style={[styles.headerImageWrapper, { borderRadius: SIZE * 0.5 }]}>
          <Image
            source={require("../assets/images/kemal.jpg")}
            resizeMode="contain"
            style={{
              width: SIZE * 0.14,
              height: SIZE * 0.14,
              borderRadius: SIZE * 0.5,
            }}
          />
        </View>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default TodayScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    justifyContent: "center",
    flexDirection: "column",
  },
  dateFormat: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.gray,
  },
  today: {
    fontSize: 32,
    textTransform: "capitalize",
    fontWeight: "bold",
    color: COLORS.grayDark,
  },
  headerImageWrapper: {
    borderColor: "#6c00ff",
    borderStyle: "solid",
    borderWidth: 3,
    padding: 3,
  },
});
