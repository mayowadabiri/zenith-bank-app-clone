import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import Icons from "@expo/vector-icons/MaterialIcons";

import CustomModal from "./Modal";
import AppText from "./AppText";

const SourceAccount = ({ setShow, isSelected, selectAccountHandler }) => {
  return (
    <CustomModal onpress={() => setShow(false)}>
      <View style={styles.modalContent}>
        <AppText style={styles.modalText}>Select An Account</AppText>
        <TouchableOpacity onPress={() => setShow(false)}>
          <AppText style={styles.modalCancel}>X</AppText>
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <View style={styles.detailBox}>
          <View>
            <AppText>Lorem Dah Ipsum</AppText>
            <Text style={styles.accountamount}>N928912892</Text>
          </View>
          <TouchableOpacity activeOpacity={1} onPress={selectAccountHandler}>
            <Icons
              name={isSelected ? "radio-button-on" : "radio-button-unchecked"}
              size={18}
              color={isSelected ? Colors.primary : "black"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  modalText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  modalCancel: {
    fontSize: 20,
    fontWeight: "bold",
  },
  details: {
    marginTop: 30,
    paddingTop: 15,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    paddingBottom: 10,
  },

  detailBox: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountamount: {
    fontWeight: "700",
  },
});

export default SourceAccount;
