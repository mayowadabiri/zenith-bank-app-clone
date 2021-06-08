import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import axios from "axios";

import AppText from "../Components/AppText";
import Select from "../Components/Select";
import TransferMode from "../Components/TransferMode";
import Input from "../Components/Input";
import useTransferModes from "../Hooks/Transfers";
import Scheduler from "../Components/Scheduler";
import Colors from "../Constants/Colors";
import SourceAccount from "../Components/SourceAccount";
import Banks from "../Components/Banks";
import CustomButton from "../Components/Button";

export default function TransferScreen() {
  const [modes, setModes] = useTransferModes();
  const [activeMode, setActiveMode] = useState(1);
  const [show, setShow] = useState(false);
  const [showBanks, setShowBanks] = useState(false);
  const [placeholder, setPlaceholder] = useState("Select an account");
  const [isEnabled, setIsEnabled] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [banks, setBanks] = useState([]);

  useEffect(() => {
    axios.get("https://api.paystack.co/bank").then((res) => {
      const mappedBanks = res.data.data.map((item) => {
        return {
          name: item.name,
          id: item.id,
          active: false,
        };
      });
      setBanks(mappedBanks);
    });
  }, []);

  const onChangeMode = (id) => {
    setModes(
      modes.map((item) => {
        if (item.id === id) {
          item.active = true;
        } else {
          item.active = false;
        }

        return item;
      })
    );
    setActiveMode(id);
  };
  const selectAccountHandler = () => {
    setIsSelected(true);
    setShow(false);
    setPlaceholder("Lorem Dah Ipsum - 391298384784");
  };

  return (
    <View style={styles.box}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.transfer}>
          <View>
            <Select iconName="right" textStyle={styles.text}>
              Transfer History
            </Select>
          </View>
          <View style={styles.transfermode}>
            <AppText style={styles.transferText}>Select Transfer Mode</AppText>
            <ScrollView horizontal contentContainerStyle={styles.transferboxes}>
              {modes.map((item) => (
                <TransferMode
                  onpress={() => onChangeMode(item.id)}
                  active={item.active}
                  key={item.id}
                  title={item.title}
                >
                  {item.logo()}
                </TransferMode>
              ))}
            </ScrollView>
          </View>
          <View style={{ marginBottom: 10 }}>
            <AppText>Select Source Account</AppText>
            <Select
              iconName="down"
              textStyle={styles.tintedText}
              onpress={() => setShow(true)}
            >
              {placeholder}
            </Select>
          </View>
          {activeMode === 3 && (
            <View style={{ marginBottom: 10 }}>
              <AppText>Select a Bank</AppText>
              <Select
                iconName="down"
                textStyle={styles.tintedText}
                onpress={() => setShowBanks(true)}
              >
                Select Account
              </Select>
            </View>
          )}
          <View style={{ marginBottom: 10 }}>
            <AppText> Destination Account</AppText>
            <Input
              keyboardType="number-pad"
              placeholder="Enter Destination Acount Number"
              returnKeyType="next"
            />
            {(activeMode === 2 || activeMode === 3) && (
              <View style={styles.beneficiaryBox}>
                <Text style={styles.beneficiary}>Choose Beneficiary</Text>
              </View>
            )}
          </View>
          <View style={{ marginBottom: 10 }}>
            <AppText>Amount</AppText>
            <Input
              keyboardType="decimal-pad"
              placeholder="0.00"
              returnKeyType="done"
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <AppText>Transfer Description</AppText>
            <Input
              keyboardType="default"
              placeholder="Transfer Description"
              returnKeyType="done"
            />
          </View>
          <Scheduler
            title="Schedule Transfer"
            toggleSwitch={toggleSwitch}
            isEnabled={isEnabled}
          />
          <View style={{ marginTop: 20 }}>
            <CustomButton>Continue</CustomButton>
          </View>
        </View>
      </ScrollView>
      {show && (
        <SourceAccount
          setShow={setShow}
          selectAccountHandler={selectAccountHandler}
          isSelected={isSelected}
        />
      )}
      {showBanks && <Banks show={() => setShowBanks(false)} banks={banks} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  box: {
    position: "relative",
    flex: 1,
  },

  transfer: {
    flexGrow: 1,
    margin: 25,
  },
  transfermode: {
    marginBottom: 20,
  },
  transferText: {
    marginBottom: 10,
  },
  transferboxes: {
    flexDirection: "row",
    overflow: "scroll",
    flexWrap: "nowrap",
    paddingBottom: 10,
  },
  beneficiaryBox: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  beneficiary: {
    fontWeight: "700",
    color: Colors.primary,
    alignSelf: "flex-end",
  },
  text: {
    color: Colors.primary,
    fontWeight: "700",
  },
  tintedText: {
    color: Colors.textColor,
  },
});
