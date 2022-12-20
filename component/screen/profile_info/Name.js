import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import Button from "../../Button";

function MyFormInput() {
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [errorMessages, setErrorMessages] = useState("");

  const handleClick = () => {
    const newErrorMessages = [];
    if (FName === "" || LName === "") {
      if (FName === "") {
        newErrorMessages.push("กรุณกรอกชื่อ");
      } else {
        newErrorMessages.push("");
      }
      if (LName === "") {
        newErrorMessages.push("กรุณกรอกนามสกุล");
      }
      setErrorMessages(newErrorMessages);
    } else {
      setErrorMessages("");
      alert("กรอกข้อมูลสำเร็จ");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "#FAFFFE",
      }}
    >
      <View>
        <Text
          style={{
            paddingTop: 20,
            height: 60,
            fontSize: 24,
            fontFamily: "Prompt-Bold",
            textAlign: "center",
          }}
        >
          มาเริ่มสร้างโปรไฟล์กันเถอะ
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Prompt-Regular",
            color: "grey",
            textAlign: "center",
            paddingBottom: 30,
          }}
        >
          ชื่อของคุณ
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Prompt-Regular",
            fontSize: 14,
          }}
        >
          ชื่อ
        </Text>
        <TextInput
          placeholder="กรุณกรอกชื่อ"
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
            marginVertical: 5,
            fontFamily: "Prompt-Regular",
            paddingLeft: 20,
            borderColor: errorMessages[0] ? "red" : "#D6D6D6",
            backgroundColor: "white",
          }}
          onChangeText={(text) => setFName(text)}
          value={FName}
        />

        <Text style={{ color: "red", fontFamily: "Prompt-Regular" }}>
          {errorMessages[0]}
        </Text>

        <Text
          style={{
            paddingTop: 20,
            fontFamily: "Prompt-Regular",
            fontSize: 14,
          }}
        >
          นามสกุล
        </Text>
        <TextInput
          placeholder="กรุณกรอกนามสกุล"
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
            fontFamily: "Prompt-Regular",
            paddingLeft: 20,
            borderColor: errorMessages[1] ? "red" : "#D6D6D6",
            backgroundColor: "white",
          }}
          onChangeText={(text) => setLName(text)}
          value={LName}
        />
        <Text style={{ color: "red", fontFamily: "Prompt-Regular" }}>
          {errorMessages[1]}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          paddingBottom: 20,
        }}
      >
        <Button
          title="ดำเนินการต่อ"
          color="#FFC300"
          onPress={() =>handleClick()}
        />
      </View>
    </View>
  );
}

export default MyFormInput;
