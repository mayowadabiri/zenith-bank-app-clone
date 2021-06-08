import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import Colors from "../Constants/Colors";

const Select = ({ children, onpress, iconName, textStyle }) => {
  return (
    <TouchableHighlight
      style={styles.container}
      activeOpacity={0.9}
      onPress={onpress}
      underlayColor={"#ccc"}
    >
      <View style={styles.box}>
        <Text style={textStyle}>{children}</Text>
        <Icon name={iconName} size={15} color={Colors.textColor} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.textColor,
    paddingVertical: 14,
    borderRadius: 5,
    marginVertical: 6,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    // backgroundColor: "red"
  },
  // text: {
  //   color: Colors.textColor,
  // },
});

export default Select;
