import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  const handleClick = element => {
    switch (element) {
      case "Login":
        return navigation.navigate("Login");
      case "New":
        return navigation.navigate("New");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.btnBorder}>
        <Text style={styles.btnHeading}>Existing Clients</Text>
        <TouchableOpacity
          onPress={() => {
            handleClick("Login");
          }}
        >
          <Text style={styles.btn}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnBorder}>
        <Text style={styles.btnHeading}>Build a new Site</Text>
        <TouchableOpacity
          onPress={() => {
            handleClick("New");
          }}
        >
          <Text style={styles.btn}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 40,
    backgroundColor: "#1A1A1D",
    width: "100%",
    height: "100%"
  },
  btn: {
    backgroundColor: "transparent",
    borderBottomColor: "#C3073F",
    borderBottomWidth: 5,
    color: "#FFF",
    fontSize: 28,
    fontWeight: "normal",
    overflow: "hidden",
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center"
  },
  btnBorder: {
    marginTop: 50,
    borderStyle: "solid",
    borderColor: "#8C8C8C",
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 40,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 25
  },
  btnHeading: {
    color: "#AFAFAF",
    fontWeight: "bold",
    textTransform: "uppercase",
    position: "relative",
    bottom: 25,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#1A1A1D",
    letterSpacing: 3,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

export default HomeScreen;
