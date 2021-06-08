import React from "react";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Icons from "react-native-vector-icons/MaterialIcons";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import {
  AirtimeNavigator,
  BillsNavigator,
  OverviewNavigator,
  TransferNavigator,
} from "./StackNavigator";

// Components
import BankLogo from "../Components/BankLogo";

import Colors from "../Constants/Colors";

const TabBottomNavigator = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabBottomNavigator.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "white",
          position: "absolute",
          height: 60,
        },
        labelStyle: {
          fontSize: 15,
          color: "#737373",
          paddingBottom: 10,
        },
      }}
    >
      <TabBottomNavigator.Screen
        name="Overview"
        component={OverviewNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-menu-sharp" size={28} color="#737373" />
          ),
        }}
      />
      <TabBottomNavigator.Screen
        name="Airtime"
        component={AirtimeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="mobile-phone" size={28} color="#737373" />
          ),
        }}
      />
      <TabBottomNavigator.Screen
        name="Transfer"
        component={TransferNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bank-transfer"
              size={28}
              color="#737373"
            />
          ),
        }}
      />
      <TabBottomNavigator.Screen
        name="Bills"
        component={BillsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="money-bill-alt" size={28} color="#737373" />
          ),
        }}
      />
    </TabBottomNavigator.Navigator>
  );
};

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

const TabStackScreenNavigator = createStackNavigator();

const TabStackNavigator = () => {
  return (
    <TabStackScreenNavigator.Navigator screenOptions={defaultOptions}>
      <TabStackScreenNavigator.Screen
        name="Tabs"
        component={TabNavigator}
        options={({ route, navigation }) => {
          const name = getHeaderTitle(route);
          return {
            headerTitle: name,
            headerRight: () => <BankLogo />,
            headerLeft: () => <DrawerIcon navigation={navigation} />,
          };
        }}
      />
    </TabStackScreenNavigator.Navigator>
  );
};

function getHeaderTitle(route) {
  return getFocusedRouteNameFromRoute(route) ?? "Overview";
}

export default TabStackNavigator;
