import { Dimensions, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { HabitTypes } from "../types";

const HabitCard = ({ data }: { data: HabitTypes }) => {
  const SIZE = Dimensions.get("window").width;
  return (
    <View style={[styles.container, { width: SIZE * 0.6 }]}>
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
    </View>
  );
};

export default HabitCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#862eff",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 15,
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
});
