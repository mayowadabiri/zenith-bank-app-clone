import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import {
  AirtimeNavigator,
  BillsNavigator,
  OverviewNavigator,
  TransferNavigator,
} from "./StackNavigator";
import TabStackNavigator from "./TabNavigator";
import BankLogo from "../Components/BankLogo";
import Colors from "../Constants/Colors";
import AppText from "../Components/AppText";

const BankDrawerNavigator = createDrawerNavigator();

const CustomDrawerList = (props) => {
  const closeDrawer = (name) => {
    console.log(props.state);
    props.navigation.navigate(name);
    props.navigation.closeDrawer();
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.name}>
        <View style={styles.nameBox}>
          <Text style={styles.nameContent}>mayowa o. dabiri</Text>
          <BankLogo />
        </View>
      </View>
      <View style={{ flexGrow: 1 }}>
        <View style={styles.drawerItem}>
          <DrawerItem
            {...props}
            label={() => <Text style={styles.labelStyle}>Overview</Text>}
            onPress={() => closeDrawer("Overview")}
            icon={({ focused, size, color }) => {
              // console.log(focused, "from the overview drawer");
              return (
                <MaterialIcons
                  name="menu"
                  style={styles.iconStyle}
                  size={size}
                  color={"#4a4a4a"}
                />
              );
            }}
            activeTintColor="red"
          />
        </View>
        <View style={styles.drawerItem}>
          <DrawerItem
            label={() => <AppText style={styles.labelStyle}>Transfer</AppText>}
            onPress={() => closeDrawer("Transfer")}
            icon={({ focused, size, color }) => (
              <MaterialCommunityIcons
                name="bank-transfer"
                size={size}
                color="#737373"
                style={styles.iconStyle}
              />
            )}
            activeTintColor="red"
            activeBackgroundColor="red"
          />
        </View>
        <View style={styles.drawerItem}>
          <DrawerItem
            label={() => (
              <AppText style={styles.labelStyle}>Airtime Recharge</AppText>
            )}
            onPress={() => closeDrawer("Airtime")}
            icon={({ focused, size, color }) => (
              <FontAwesome
                name="mobile-phone"
                size={size}
                color={"#4a4a4a"}
                style={styles.iconStyle}
              />
            )}
          />
        </View>
        <View style={styles.drawerItem}>
          <DrawerItem
            label={() => (
              <AppText style={styles.labelStyle}>Bills Payment</AppText>
            )}
            onPress={() => closeDrawer("Bills")}
            icon={({ focused, size, color }) => (
              <MaterialCommunityIcons
                name="bank-transfer"
                size={size}
                color={"#4a4a4a"}
                style={styles.iconStyle}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <BankDrawerNavigator.Navigator
      openByDefault
      drawerContent={(props) => <CustomDrawerList {...props} />}
      activeBackgroundColor="red"
    >
      <BankDrawerNavigator.Screen name="Tabs" component={TabStackNavigator} />
    </BankDrawerNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  name: {
    height: 130,
    backgroundColor: Colors.primary,
  },
  nameBox: {
    flexDirection: "row",
    alignItems: "flex-end",
    flex: 1,
    marginBottom: 20,
    justifyContent: "center",
  },
  nameContent: {
    marginRight: "auto",
    textAlign: "center",
    flexGrow: 1,
    color: "white",
    textTransform: "uppercase",
    fontSize: 20,
  },
  drawerItem: {
    // backgroundColor: "red",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: -20,
    color: "#4a4a4a",

    // backgroundColor: "black",
  },
  iconStyle: {
    // backgroundColor: "red",
    flexBasis: "10%",
  },
});

export default DrawerNavigator;
