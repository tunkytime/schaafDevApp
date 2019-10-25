import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const name = "Alex";

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.nameStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  nameStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
