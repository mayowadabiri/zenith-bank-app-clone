// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import Icons from "@expo/vector-icons/MaterialIcons";

import Colors from "../Constants/Colors";

import Input from "../Components/Input";
import AppText from "../Components/AppText";
import Select from "../Components/Select";
import Mark from "../Components/Mark";
import SwitchComponent from "../Components/Switch";
import CustomButton from "../Components/Button";
import CustomModal from "../Components/Modal";
import Scheduler from "../Components/Scheduler";
import SourceAccount from "../Components/SourceAccount";
import useOperator from "../Hooks/States";

export default function AirtimeScreen() {
  const [Operators, setOperators] = useOperator();
  const [show, setShow] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [placeholder, setPlaceholder] = useState("Select an account");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const toggleOperator = (id) => {
    setOperators(
      Operators.map((item) => {
        if (item.id === id) {
          item.active = true;
        } else {
          item.active = false;
        }

        return item;
      })
    );
  };

  const showSelect = () => {
    setShow(true);
  };

  const selectAccountHandler = () => {
    setIsSelected(true);
    setShow(false);
    setPlaceholder("Lorem Dah Ipsum - 391298384784");
  };

  return (
    <KeyboardAvoidingView
      contentContainerStyle={{ flexGrow: 1, height: "100%" }}
    >
      <ScrollView contentContainerStyle={{ ...styles.containerStyle }}>
        <View style={styles.container}>
          <View style={{ width: "100%" }}>
            <View>
              <AppText>Select an Account</AppText>
              <Select onpress={showSelect}> {placeholder}</Select>
            </View>
            <View style={{ marginTop: 20 }}>
              <AppText>Select Mobile Operator</AppText>
              <ScrollView contentContainerStyle={styles.network} horizontal>
                {Operators.map((item) => (
                  <View key={item.id} style={styles.networkcontainer}>
                    <View>
                      <TouchableOpacity
                        activeOpacity={1}
                        style={{
                          ...styles.networkBox,
                          backgroundColor: item.bgColor,
                        }}
                        onPress={() => toggleOperator(item.id)}
                      >
                        <Image
                          source={item.image}
                          style={styles.networkImage}
                        />
                        {item.active ? (
                          <Mark
                            style={{ backgroundColor: "white" }}
                            bgColor="white"
                          />
                        ) : null}
                      </TouchableOpacity>
                      <Text
                        style={{
                          color: item.active ? "red" : Colors.secondaryColor,
                          marginTop: 5,
                          fontWeight: "600",
                        }}
                      >
                        {item.text}
                      </Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
            <View style={styles.number}>
              <AppText>Mobile Number</AppText>
              <Input
                keyboardType="number-pad"
                placeholder="Mobile Number"
                returnKeyType="next"
              />
              <Text style={styles.contact}>Select from Contacts</Text>
            </View>
          </View>
          <View style={styles.number}>
            <AppText>Amount</AppText>
            <Input
              keyboardType="decimal-pad"
              placeholder="0.00"
              returnKeyType="done"
            />
            <Scheduler
              title={"Schedule Airtime"}
              isEnabled={isEnabled}
              toggleSwitch={toggleSwitch}
            />
          </View>
          <View style={styles.button}>
            <CustomButton>Continue</CustomButton>
          </View>
        </View>
      </ScrollView>
      {show && <SourceAccount setShow={setShow} />}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexGrow: 1,
    position: "relative",
    // backgroundColor: "red",
    height: "100%",
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  network: {
    flexDirection: "row",
    flexWrap: "nowrap",
    overflow: "scroll",
    marginTop: 10,
    paddingBottom: 5,
  },
  networkcontainer: {
    marginRight: 19,
  },
  networkBox: {
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,

    position: "relative",
  },
  networkImage: {
    width: 50,
    height: 50,
  },
  mark: {
    position: "absolute",
    top: 6,
    right: 6,
  },
  number: {
    marginTop: 20,
  
  },
  contact: {
    marginTop: 10,
    paddingBottom: 10,
    fontWeight: "700",
    color: Colors.primary,
    textAlign: "right",  
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },

  button: {
    marginTop: 20,
  },
});
