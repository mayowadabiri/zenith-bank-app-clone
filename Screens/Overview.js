import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Switch} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
import Colors from "../Constants/Colors";

import EazyLinks from "../Components/EasyLinks";
import Scheduler from "../Components/Scheduler";
export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.account}>
            <Text style={styles.number}>2098457690 -</Text>
            <Text style={styles.active}> ACTIVE</Text>
          </View>
          <Text style={styles.name}>Lorem Dah Ipsum</Text>
          <View style={styles.balance}>
            <Text style={styles.amount}>N*****</Text>
            <View style={styles.switch}>
              <Text>Show Balance</Text>
              <Switch
                trackColor={{ false: "#ccc", true: Colors.primary }}
                thumbColor={isEnabled ? Colors.primary : "#767577"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
        <View style={styles.ledger}>
          <View style={styles.ledgerBox}>
            <View style={styles.ledgerBalance}>
              <Text style={styles.ledgerText}>Ledger Balance:</Text>
              <Text style={styles.hidden}>Hidden</Text>
            </View>
            <View style={styles.history}>
              <AntDesign name="calendar" size={15} color="white" />
              <Text style={styles.historyText}>History</Text>
            </View>
          </View>
        </View>
        <View style={styles.eazylinks}>
          <Text style={styles.eazyText}>eaZylinks</Text>
          <View style={styles.categoryContainer}>
            <View style={styles.category}>
              <EazyLinks title="QR Payments">
                <AntDesign name={"barcode"} color="black" size={25} />
              </EazyLinks>
              <EazyLinks title="Travel & Leisure">
                <Ionicons name={"airplane-outline"} color="black" size={25} />
              </EazyLinks>
              <EazyLinks title="Cable TV">
                <FontAwesome name={"tv"} color="black" size={25} />
              </EazyLinks>
              <EazyLinks title="Cards">
                <Octicons name={"credit-card"} color="black" size={25} />
              </EazyLinks>
            </View>
          </View>
          <View style={styles.categoryContainer}>
            <View style={styles.category}>
              <EazyLinks title="My BVN">
                <AntDesign name={"barcode"} color="black" size={25} />
              </EazyLinks>
              <EazyLinks title="Schduled Payment">
                <Ionicons name={"airplane-outline"} color="black" size={25} />
              </EazyLinks>
              <EazyLinks title="Customize Link">
                <FontAwesome name={"tv"} color="black" size={25} />
              </EazyLinks>
              <EazyLinks title="Settings">
                <Octicons name={"credit-card"} color="black" size={25} />
              </EazyLinks>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  box: {
    marginHorizontal: 20,
  },

  account: {
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  number: {
    color: Colors.primary,
    fontWeight: "600",
  },
  active: {
    color: Colors.primary,
    fontWeight: "600",
  },
  name: {
    marginTop: 7,
    textTransform: "uppercase",
  },

  balance: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amount: {
    fontSize: 20,
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
  },
  ledger: {
    marginTop: 10,
    backgroundColor: "#909090",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  ledgerBox: {
    marginHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ledgerBalance: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ledgerText: {
    color: "white",
    marginRight: 4,
  },
  hidden: {
    color: "white",
  },
  history: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  historyText: {
    color: "white",
    marginLeft: 7,
  },
  eazylinks: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  eazyText: {
    fontWeight: "500",
    paddingBottom: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  categoryContainer: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginHorizontal: 20,
    paddingVertical: 20,
  },
});
