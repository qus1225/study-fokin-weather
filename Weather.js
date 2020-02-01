import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContianer}>
        <MaterialCommunityIcons size={96} name="weather-lightning-rainy" />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.halfContianer}></View>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Dust",
    "Haze",
    "Mist",
    "Clouds"
    // TODO: 더 추가
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42
  },
  halfContianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
