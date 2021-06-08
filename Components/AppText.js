import React from "react";
import { Text, StyleSheet } from "react-native";

import Colors from "../Constants/Colors";

const AppText = ({ children, style }) => {
  return <Text style={{...styles.text, ...style}}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: Colors.textColor,
    fontSize: 15
  },
});

export default AppText;
