import React from "react";
import { View, Image, StyleSheet } from "react-native";

const BankLogo = () => {
  return (
    <View style={styles.imageContainer}>
      <Image source={Images.bankLogo} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 35,
    height: 35,
    marginRight: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default BankLogo;
