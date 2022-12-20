import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

import PhoneInput from "react-native-phone-number-input";

function Input({
  label,
  iconName,
  error,
  password,
  onfocus = () => {},
  ...porps
}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={style.label}>{label}</Text>
      <PhoneInput
        defaultCode="TH"
        onFocus={() => {
          onfocus();
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 20,
    color: "grey",
    fontFamily: "Prompt-Regular",
  },
  inputContainer: {
    height: 55,
    backgroundColor: "light",
    flexDirection: "row",
    borderWidth: 0.5,
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#A9A9A9",
  },
});

export default Input;
