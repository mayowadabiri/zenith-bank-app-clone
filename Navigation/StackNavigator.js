import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import TabNavigator from "./TabNavigator";

// Screens
import AirtimeScreen from "../Screens/Airtime";
import BillsScreen from "../Screens/Bills";
import OverviewScreen from "../Screens/Overview";
import TransferScreen from "../Screens/Transfer";

// Components
import BankLogo from "../Components/BankLogo";

// Constants
import Colors from "../Constants/Colors";
import Images from "../Constants/Images";

const OverviewStackNavigator = createStackNavigator();

const defaultOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: "#ffffff",
};

const DrawerIcon = ({ navigation }) => {
  return (
    <MaterialCommunityIcons
      name="menu"
      color="white"
      size={24}
      style={{ paddingLeft: 20 }}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

export const OverviewNavigator = () => {
  return (
    <OverviewStackNavigator.Navigator screenOptions={defaultOptions}>
      <OverviewStackNavigator.Screen
        name="Overview"
        component={OverviewScreen}
        options={{
          headerShown: false,
        }}
        // options={({ navigation }) => ({
        //   headerRight: () => <BankLogo />,
        //   headerLeft: () => <DrawerIcon navigation={navigation} />,
        // })}
      ></OverviewStackNavigator.Screen>
    </OverviewStackNavigator.Navigator>
  );
};

const AirtimeStackNavigator = createStackNavigator();

export const AirtimeNavigator = () => {
  return (
    <AirtimeStackNavigator.Navigator screenOptions={defaultOptions}>
      <AirtimeStackNavigator.Screen
        name="Airtime"
        component={AirtimeScreen}
        options={{
          headerShown: false,
        }}
      />
    </AirtimeStackNavigator.Navigator>
  );
};

const TransferStackNavigator = createStackNavigator();

export const TransferNavigator = () => {
  return (
    <TransferStackNavigator.Navigator screenOptions={defaultOptions}>
      <TransferStackNavigator.Screen
        name="Transfer"
        component={TransferScreen}
        options={{
          headerShown: false,
        }}
      />
    </TransferStackNavigator.Navigator>
  );
};

const BillsStackNavigator = createStackNavigator();

export const BillsNavigator = () => {
  return (
    <BillsStackNavigator.Navigator screenOptions={defaultOptions}>
      <BillsStackNavigator.Screen
        name="Bills Payment"
        component={BillsScreen}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </BillsStackNavigator.Navigator>
  );
};
