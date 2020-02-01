import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello안녕하세요 ㅋㅋ !!!</Text> */}
      <View style={styles.yellowView} />
      <View style={styles.blueView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  // text: {
  //   color: "#fff"
  // }
  yellowView: {
    flex: 1,
    backgroundColor: "yellow"
  },
  blueView: {
    flex: 2,
    backgroundColor: "blue"
  }
});
