import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

const HeaderBar = () => {
  const SIZE = Dimensions.get("window").width;
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: 15 }}>
        <View style={styles.headerIcons}>
          <Entypo name="menu" size={34} />
          <TouchableOpacity onPress={() => {}}>
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerProfile}>
          <View
            style={[styles.headerImageWrapper, { borderRadius: SIZE * 0.5 }]}
          >
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
          <View style={styles.headerUserWrapper}>
            <Text style={styles.headerGreeting}>Good {timeOfDay},</Text>
            <Text style={styles.headerUsername}>Anumah Joshua</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  headerProfile: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  headerImageWrapper: {
    borderColor: "#6c00ff",
    borderStyle: "solid",
    borderWidth: 3,
    padding: 3,
  },
  headerUserWrapper: {
    flexDirection: "column",
    marginLeft: 20,
  },
  headerUsername: {
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "#444",
  },
  headerGreeting: {
    textTransform: "capitalize",
    fontSize: 18,
    color: "#666",
  },
});

//TODO COLORS
//PURPLES:
// #6c00ff  @1
// #862eff  @2
// #9a4eff  @3
// #b781ff  @4
// #d1b0ff  @5

//REDS:
//#D90000   @1

//GREENS:
//#04733F   @1
//#04756F   @2
