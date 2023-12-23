import {
  ActivityIndicator,
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

import { AppInput, Todo } from "../components";
import List from "../components/List";

import { TodoData } from "../data/todos";
import { TodoTypes } from "../types";
import { COLORS } from "../constants/theme";

const AddScreen = () => {
  const [text, setText] = useState("");

  const loading = false;
  const error = false;
  const [todos, setTodos] = useState(TodoData);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appInputWrapper}>
        <AppInput
          text={text}
          setText={setText}
          placeholder="Add your today task"
          btnTitle="Add task"
        />
      </View>
      <View style={styles.listWrapper}>
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
      </View>
    </SafeAreaView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  appInputWrapper: {
    paddingVertical: 10,
    justifyContent: "center",
    // marginBottom: 5,
  },
  listWrapper: {
    paddingBottom: 280,
    marginHorizontal: 10,
  },
});
