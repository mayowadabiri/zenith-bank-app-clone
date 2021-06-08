import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../Constants/Colors";

const CustomButton = ({ children }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={.9}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5
  },
  text: {
      color: "white",
      fontSize: 15,
      textTransform: "uppercase",
      textAlign: "center"
  },
});

export default CustomButton;
