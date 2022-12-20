import React, { useState } from "react";
import { TextInput, Button, Text, View } from "react-native";

function MyFormInput() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const validate = (text) => {
    if (!text) {
      setError("Email is required");
      return false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(text)) {
      setError("Invalid email address");
      return false;
    }
    setError(null);
    return true;
  };

  const onSubmit = (text) => {
    if (validate(value)) {
      Alert.alert(`You entered: ${text}`);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your email"
        keyboardType="email-address"
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        value={value}
        onChangeText={(text) => setValue(text)}
        onEndEditing={() => validate(value)}
      />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      <Button title="Submit" onPress={onSubmit} >OK</Button>
    </View>
  );
}

export default MyFormInput;
