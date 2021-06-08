import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  OverviewNavigator,
  AirtimeNavigator,
  TransferNavigator,
  BillsNavigator
} from "./Navigation/StackNavigator";
import TabNavigator from "./Navigation/TabNavigator";
import DrawerNavigator from "./Navigation/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
