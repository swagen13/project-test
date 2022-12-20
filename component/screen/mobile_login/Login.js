import React from "react";
import { StyleSheet, Text, ScrollView, View, Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../Input";
import Button from "../../Button";

const Login = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
      }}
    >
      <Text style={styles.header}>ยินดีต้อนรับกลับมา</Text>

      {/* Input */}
      <View style={{ marginLeft: 10 }}>
        <Input label="เข้าสู่ระบบโดยใช้หมายเลขโทรศัพท์" />
        <Button
          title="ดำเนินการต่อ"
          color="#FFC300"
          onPress={() => Alert.alert("ดำเนินการต่อ")}
        />
      </View>

      <Text style={styles.text}>
        โดยระบบจะส่ง SMS เพื่อยืนยันในขั้นตอนถัดไป
      </Text>
      <Text style={{ marginTop: 70 }}></Text>
      <Text style={[styles.text, { marginBottom: 30 }]}>หรือ</Text>

      <Button
        title="เข้าสู่ระบบโดยใช้ Line"
        color="#32CD32"
        onPress={() => Alert.alert("เข้าสู่ระบบโดยใช้ Line")}
      />
      <Text style={{ marginTop: 10 }}></Text>
      <Button
        title="เข้าสู่ระบบโดยใช้ Facebook"
        color="#1E90FF"
        onPress={() => Alert.alert("เข้าสู่ระบบโดยใช้ Facebook")}
      />
      <Text style={{ marginTop: 20 }}></Text>

      <Text style={[styles.label, { color: "black" }]}>เพิ่งเริ่มใช่ไหม</Text>
      <Text style={[styles.label, { color: "#1E90FF" }]}>สมัครสมาชิก</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    fontSize: 24,
    padding: 10,
    fontFamily: "Prompt-Bold",
  },
  text: {
    fontSize: 16,
    marginTop: 20,
    marginLeft: 10,
    fontFamily: "Prompt-Regular",
    color: "grey",
    textAlign: "center",
  },
  label: {
    fontSize: 20,
    marginLeft: 10,
    fontFamily: "Prompt-Regular",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Login;
