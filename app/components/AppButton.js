import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

class AppButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color = "primary", onPress, title } = this.props;
    const colorStyle = { backgroundColor: color };
    const combineStyles = StyleSheet.flatten([colorStyle, styles.button]);
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors[color] }]}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
});

export default AppButton;
