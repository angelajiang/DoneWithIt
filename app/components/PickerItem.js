import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

export function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.text}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
