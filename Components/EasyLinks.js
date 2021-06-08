import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const EazyLinks = ({ title, children }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} >
      <View style={styles.container}>
        <View style={styles.icon}>{children}</View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // justifyContent: "space-between",20%
   
    flex: 1
  },
  icon: {
    marginBottom: 10,
  },
  text: {
    fontSize: 10,
    color: "#909090",
    textAlign: "center"
  },
});

export default EazyLinks;
