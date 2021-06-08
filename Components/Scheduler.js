import React from "react";
import { View, Switch, StyleSheet } from "react-native";
import AppText from "./AppText";
import Colors from "../Constants/Colors";

const Scheduler = ({ isEnabled, toggleSwitch, title }) => {
  return (
    <View style={styles.schedule}>
      <AppText>{title}</AppText>
      <Switch
        trackColor={{ false: "#ccc", true: Colors.primary }}
        thumbColor={isEnabled ? Colors.primary : "#767577"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  schedule: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
    borderBottomColor: "#ccc",

    borderBottomWidth: 1
  },
});

export default Scheduler;
