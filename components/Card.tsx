import { Text, View, StyleSheet, Dimensions } from "react-native";

const Card = () => {
  const SIZE = Dimensions.get("window").width;
  return (
    <View style={[styles.card, { width: SIZE * 0.7, height: SIZE * 0.4 }]}>
      <View style={styles.head}>
        <Text style={styles.title}>daily task</Text>
        <Text style={styles.currentTime}>currentTime</Text>
      </View>
      <Text style={styles.task}>Make a landing page app and mobile</Text>
      <View style={styles.expire}>
        <Text style={styles.date}>18/23</Text>
        <Text style={styles.dueTime}>tick</Text>
      </View>
      <View style={styles.lgCircle} />
      <View style={styles.smCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#862eff",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 15,
    position: "relative",
    overflow: "hidden",
  },
  head: {
    flexDirection: "column",
    justifyContent: "space-between",
    // justifyContent: "flex-start",
    // alignItems: "stretch",
  },
  title: {
    fontSize: 18,
    color: "#fff",
  },
  currentTime: {
    fontSize: 18,
    color: "#fff",
  },
  task: {
    fontSize: 20,
    color: "#fff",
  },
  expire: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    color: "#fff",
    fontSize: 18,
  },
  dueTime: {
    color: "#fff",
    fontSize: 18,
  },
  lgCircle: {
    position: "absolute",
    right: -20,
    bottom: -20,
    borderWidth: 22,
    borderColor: "#d1b0ff",
    opacity: 0.2,
    width: 100,
    height: 100,
    borderRadius: 75,
  },
  smCircle: {
    position: "absolute",
    left: 0,
    top: 0,
    borderWidth: 12,
    borderColor: "#d1b0ff",
    opacity: 0.2,
    width: 50,
    height: 50,
    borderRadius: 75,
  },
});
export default Card;
//PURPLES:
// #6c00ff  @1
// #862eff  @2
// #9a4eff  @3
