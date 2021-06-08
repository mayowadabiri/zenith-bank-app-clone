import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import Mark from "./Mark";

import Colors from "../Constants/Colors";
const TransferMode = ({ children, title, active, onpress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        ...styles.container,
        backgroundColor: active ? "#fbefef" : "#ffffff",
      }}
      onPress={onpress}
    >
      <View>{children}</View>
      <View style={styles.text}>
        <Text
          style={{
            ...styles.textBox,
            color: active ? Colors.primary : Colors.textColor,
            fontWeight: active ? "600" : "200",
          }}
        >
          {title}
        </Text>
      </View>
      {active && <Mark bgColor={Colors.primary} color="white" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    height: 95,
    width: 95,
    marginRight: 10,
    padding: 10,
    justifyContent: "space-between",

    position: "relative",
  },
  text: {
    width: "80%",
  },
  textBox: {
    fontSize: 15,
  },
});

export default TransferMode;
