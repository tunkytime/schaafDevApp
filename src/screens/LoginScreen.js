import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import t from "tcomb-form-native";

const LoginScreen = () => {
  const Form = t.form.Form;

  const User = t.struct({
    email: t.String,
    password: t.String
  });

  const formStyles = {
    ...Form.stylesheet,
    formGroup: {
      normal: {
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10
      }
    },
    controlLabel: {
      normal: {
        color: "#AFAFAF",
        fontSize: 14,
        marginBottom: 7,
        fontWeight: "normal"
      },
      error: {
        color: "red",
        fontSize: 14,
        marginBottom: 7,
        fontWeight: "600"
      }
    },
    textbox: {
      normal: {
        color: "#FFFFFF",
        fontSize: 16,
        height: 36,
        paddingVertical: Platform.OS === "ios" ? 7 : 0,
        paddingHorizontal: 7,
        borderRadius: 4,
        borderColor: "#AFAFAF",
        borderWidth: 1,
        marginBottom: 5
      }
    }
  };

  const options = {
    fields: {
      email: {
        error:
          "Without an email address, how are you going to reset your password when you forget it?"
      },
      password: {
        error:
          "Choose something you use on a dozen other sites or something you won't remember"
      }
    },
    stylesheet: formStyles
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.btnBorder}>
        <Text style={styles.btnHeading}>Login to your Account</Text>
        <Form ref={c => (this._form = c)} type={User} options={options} />
        <TouchableOpacity
          onPress={() => {
            handleClick("New");
          }}
        >
          <Text style={styles.btnLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 60,
    backgroundColor: "#1A1A1D",
    width: "100%",
    height: "100%"
  },
  btnLogin: {
    backgroundColor: "#C3073F",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "normal",
    textAlign: "center",
    padding: 10,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10
  },
  btnBorder: {
    marginTop: 50,
    borderStyle: "solid",
    borderColor: "#8C8C8C",
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 40,
    paddingRight: 10,
    paddingLeft: 10,
    width: "90%",
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
    fontSize: 16,
    backgroundColor: "#1A1A1D",
    letterSpacing: 2,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

export default LoginScreen;
