import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

const Input = ({ ...props }) => {
  return (
    <KeyboardAvoidingView contentContainerStyle={styles.container}>
      <View>
        <TextInput {...props} style={styles.input} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginVertical: 6,
    borderWidth: 1,
    borderColor: Colors.textColor,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
    textAlignVertical: "center",
  },
});

export default Input;
