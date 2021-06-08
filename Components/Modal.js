import React from "react";
import { Modal, StyleSheet, View, TouchableOpacity, Text } from "react-native";

const CustomModal = ({ children, onpress }) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.contentContainer}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onpress}
        style={{ flexGrow: 1 }}
      ></TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.box}>{children}</View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "#2424248c",
  },
  container: {
    width: "100%",
    maxHeight: 650,
  },
  box: {
    backgroundColor: "white",
    paddingVertical: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default CustomModal;
