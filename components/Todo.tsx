import { Dimensions, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TodoTypes } from "../types";

const Todo = ({ data }: { data: TodoTypes }) => {
  const SIZE = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View
          style={[
            styles.iconWrapper,
            {
              width: SIZE * 0.14,
              height: SIZE * 0.14,
              borderRadius: SIZE * 0.2,
            },
          ]}
        >
          <FontAwesome5 name="clipboard-list" size={30} color="#fff" />
        </View>
        <Text style={styles.task}>{data.todo}</Text>
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ece8fc",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
  },
  left: {
    gap: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#6c00ff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  task: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
  },
});
// #d1b0ff;
