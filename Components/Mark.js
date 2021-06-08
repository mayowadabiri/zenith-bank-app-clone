import React from "react";
import { View, StyleSheet } from "react-native";
import Icons from "@expo/vector-icons/Ionicons";

const Mark = (bgColor, color) => {
  return (
    <View style={{ ...styles.mark, backgroundColor: bgColor.bgColor }}>
      <Icons name="checkmark" size={10} color={bgColor.color} />
    </View>
  );
};

const styles = StyleSheet.create({
  mark: {
    position: "absolute",
    top: 6,
    right: 6,
    overflow: "hidden",
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Mark;
