import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

const HomeScreen = () => {
  const handleLogin = () => {
    Alert.alert("Login Button Pressed!");
  };
  const handleWebsite = () => {
    Alert.alert("Website Button Pressed!");
  };
  const handleLandingPage = () => {
    Alert.alert("Landing Page Button Pressed!");
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.buttonBorder}>
          <Text style={styles.clients}>Existing Clients</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonBorder}>
          <Text style={styles.new}>Start Something New</Text>
          <TouchableOpacity onPress={handleWebsite}>
            <Text style={styles.button}>Website</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 40 }} />
          <TouchableOpacity onPress={handleLandingPage}>
            <Text style={styles.button}>Landing Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 40,
    backgroundColor: "#1A1A1D",
    width: "100%",
    height: "100%"
  },
  button: {
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
  buttonBorder: {
    marginTop: 40,
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
  clients: {
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
  },
  new: {
    color: "#AFAFAF",
    fontWeight: "bold",
    textTransform: "uppercase",
    position: "relative",
    bottom: 23,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "#1A1A1D",
    letterSpacing: 3,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

export default HomeScreen;
