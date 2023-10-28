import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Tasks = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today Tasks</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.seeMore}>All tasks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 30,
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
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
