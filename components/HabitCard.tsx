import { Dimensions, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { HabitTypes } from "../types";

const HabitCard = ({ data }: { data: HabitTypes }) => {
  const SIZE = Dimensions.get("window").width;
  return (
    <View style={[styles.container, { width: SIZE * 0.6 }]}>
      <LinearGradient
        colors={["#b781ff", "#9a4eff", "#6c00ff"]}
        start={{ x: 0.7, y: 0 }}
        // end={{ x: 1, y: 1 }}
        style={styles.linearGradient}
      >
        <View style={styles.periodWrapper}>
          <MaterialIcons name="schedule" size={38} color="#fff" />
          <Text style={styles.period}>{data.period}</Text>
        </View>

        <Text style={styles.task}>{data.habit}</Text>
        <Text style={styles.freq}>{data.freq}</Text>
        <View style={styles.taskDetail}>
          <Text style={styles.noLeft}>{data.noLeft}</Text>
          <Text style={styles.check}>{data.completed}</Text>
        </View>
        <View
          style={[styles.smCircle, { width: SIZE * 0.15, height: SIZE * 0.15 }]}
        />
        <View
          style={[styles.mdCircle, { width: SIZE * 0.23, height: SIZE * 0.23 }]}
        />
        <View
          style={[styles.lgCircle, { width: SIZE * 0.35, height: SIZE * 0.35 }]}
        />
      </LinearGradient>
    </View>
  );
};

export default HabitCard;

const styles = StyleSheet.create({
  container: {
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
  linearGradient: {
    padding: 10,
  },
  periodWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  period: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  task: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 3,
    color: "#fff",
  },
  freq: {
    fontSize: 16,
    color: "#eee",
  },
  taskDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  noLeft: {
    fontSize: 18,
    color: "#fff",
  },
  check: {
    color: "#fff",
  },
  smCircle: {
    color: "#fff",
    position: "absolute",
    left: 65,
    top: -30,
    borderWidth: 18,
    borderColor: "#d1b0ff",
    opacity: 0.18,
    borderRadius: 65,
  },
  mdCircle: {
    color: "#fff",
    position: "absolute",
    right: -55,
    bottom: 15,
    borderWidth: 18,
    borderColor: "#d1b0ff",
    opacity: 0.18,
    borderRadius: 75,
  },
  lgCircle: {
    color: "#fff",
    position: "absolute",
    left: -35,
    bottom: -45,
    borderWidth: 22,
    borderColor: "#d1b0ff",
    opacity: 0.18,
    borderRadius: 85,
  },
});
