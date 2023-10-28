import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import Todo from "./Todo";
import { TodoTypes } from "../types";
import { TodoData } from "../data/todos";

const List = () => {
  const loading = false;
  const error = false;
  const [todos, setTodos] = useState(TodoData);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={todos}
          renderItem={({ item }) => <Todo data={item} />}
          keyExtractor={(item: TodoTypes) => item.id.toString()}
          style={{ backgroundColor: "#fff" }}
          contentContainerStyle={{
            rowGap: 10,
          }}
          scrollEnabled
        />
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
});
