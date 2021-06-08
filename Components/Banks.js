import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import Icons from "@expo/vector-icons/MaterialIcons";
import CustomModal from "./Modal";
import AppText from "./AppText";
import Colors from "../Constants/Colors";

const Banks = ({ banks, show, filterBanks }) => {
  const [filterText, setFiterText] = useState("");
  // useEffect(() => {
  //   // console.log(filterText);
  //   filterBanks(filterText);
  // }, [filterText]);

  return (
    <CustomModal onpress={show}>
      <View style={styles.modalContent}>
        <AppText style={styles.modalText}>Select a Bank</AppText>
        <TouchableOpacity activeOpacity={0.7} onPress={show}>
          <AppText style={styles.modalCancel}>X</AppText>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#ccc"
          value={filterText}
          onChangeText={(text) => setFiterText(text)}
        />
      </View>
      <ScrollView>
        {banks
          .filter((item) => item.name.includes(filterText))
          .map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={1}
              style={styles.bankContainer}
            >
              {/* <View style={styles.bankItem}> */}
              <Text
                style={{
                  fontWeight: "700",
                  color: Colors.secondaryColor,
                  textTransform: "uppercase",
                }}
              >
                {item.name}
              </Text>
              <Icons name="radio-button-unchecked" size={18} />
              {/* </View> */}
            </TouchableOpacity>
          ))}
      </ScrollView>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: "space-between",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  modalText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 20,
  },

  input: {
    padding: 7,
    backgroundColor: "#efefef",
    borderRadius: 5,
  },
  bankContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 20,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default Banks;
