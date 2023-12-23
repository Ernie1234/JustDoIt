import React, { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { COLORS } from "../constants/theme";

type inputProps = {
  text: string;
  setText: (text: string) => void;
  placeholder: string;
  btnTitle: string;
};

const AppInput = ({ text, setText, placeholder, btnTitle }: inputProps) => {
  const handlePress = () => {
    alert(`Text: ${text}`);
    setText("");
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder={placeholder}
          selectionColor={COLORS.purple}
        />
        <Pressable style={styles.btnWrapper} onPress={handlePress}>
          <Text style={styles.btnText}>{btnTitle}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  input: {
    borderColor: COLORS.gray,
    color: COLORS.purple,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 20,
  },
  btnWrapper: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: COLORS.purple2,
  },
  btnText: {
    color: "white",
    padding: 5,
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});
