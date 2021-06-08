import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import Select from "../Components/Select";
import TransferMode from "../Components/TransferMode";
import AppText from "../Components/AppText";
import Colors from "../Constants/Colors";

export default function App() {
  const [biller, setBiller] = useState([
    {
      id: 1,
      title: "Zenith Billers",
      icon: () => <AntDesign name="user" size={20} color="red" />,
      active: true,
    },
    {
      id: 2,
      title: "Zenith Billers",
      icon: () => <AntDesign name="user" size={20} color="red" />,
      active: false,
    },
  ]);

  const onChangeMode = (id) => {
    setBiller(
      biller.map((item) => {
        if (item.id === id) {
          item.active = true;
        } else {
          item.active = false;
        }

        return item;
      })
    );
    // setActiveMode(id);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <View>
          <Select iconName="right" textStyle={styles.text}>
            Bills Payment History
          </Select>
        </View>
        <View style={styles.billers}>
          <AppText style={styles.appText}>Select Biller Colection</AppText>
          <View style={styles.billerBox}>
            {biller.map((item) => (
              <TransferMode
                onpress={() => onChangeMode(item.id)}
                title={item.title}
                key={item.id}
                active={item.active}
              >
                {item.icon()}
              </TransferMode>
            ))}
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <AppText>Select an Account</AppText>
          <Select iconName="down" textStyle={styles.tintedText}>
            Select Account
          </Select>
        </View>
        <View style={{marginTop: 20}}>
          <AppText>Select an Account</AppText>
          <Select iconName="down" textStyle={styles.tintedText}>
            Select Account
          </Select>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    margin: 20,
  },
  text: {
    color: Colors.primary,
    fontWeight: "700",
  },
  billers: {
    marginTop: 20,
  },
  appText: {
    marginBottom: 10,
  },
  billerBox: {
    flexDirection: "row",
  },
  tintedText: {
    color: Colors.textColor,
  },
});
