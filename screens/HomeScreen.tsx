import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: 1,
    name: "Luke Skywalker",
    birth_year: "19BBY",
  },
  {
    id: 2,
    name: "C-3PO",
    birth_year: "112BBY",
  },
  {
    id: 3,
    name: "R2-D2",
    birth_year: "33BBY",
  },
  {
    id: 4,
    name: "Darth Vader",
    birth_year: "41.9BBY",
  },
  {
    id: 5,
    name: "Leia Organa",
    birth_year: "19BBY",
  },
];

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      <Text>home screen testing</Text>
    </View>
  );
};

export default HomeScreen;
