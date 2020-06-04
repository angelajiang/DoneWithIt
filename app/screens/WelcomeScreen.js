import React, { Component } from "react";
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={imageBackground}
        style={styles.background}
        blurRadius={5}
      >
        <View style={styles.buttonContainer}>
          <AppButton
            color="primary"
            title="Login"
            onPress={() => console.log("Tapped")}
          />
          <AppButton
            color="secondary"
            title="Register"
            onPress={() => console.log("Tapped")}
          />
        </View>
        <View style={styles.logoContainer}>
          <Image source={imageLogo} style={styles.logo} />
          <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
      </ImageBackground>
    );
  }
}
//<View style={styles.loginButton} />
//<View style={styles.registerButton} />

const imageBackground = require("../assets/background.jpg");
const imageLogo = require("../assets/logo-red.png");

// rnss
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
