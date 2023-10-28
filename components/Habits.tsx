import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import HabitCard from "./HabitCard";
import { HabitData } from "../data/habits";
import { HabitTypes } from "../types";

const Habits = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Habits</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{ flex: 2 }}> */}
      <FlatList
        data={HabitData}
        renderItem={({ item }) => <HabitCard data={item} />}
        contentContainerStyle={{ columnGap: 16 }}
        horizontal
        keyExtractor={(item: HabitTypes) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: "#fff" }}
      />
      {/* </View> */}
    </View>
  );
};

export default Habits;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#333",
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  seeMore: {
    fontSize: 18,
    color: "#6c00ff",
  },
});
