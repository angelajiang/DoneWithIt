import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

// Add Heading
function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
