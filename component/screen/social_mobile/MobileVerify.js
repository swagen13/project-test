import React from "react";
import { StyleSheet, Text, ScrollView, View, Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../Input";
import Button from "../../Button";

const MobileVerify = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
      >
        <Text style={styles.header}>ยินดีต้อนรับกลับมา</Text>

        {/* Input */}
        <View style={{ marginLeft: 10 }}>
          <Input label="เข้าสู่ระบบโดยใช้หมายเลขโทรศัพท์" />
          <Button title="ดำเนินการต่อ" color="#FFC300" />
        </View>

        <Text style={styles.text}>
          โดยระบบจะส่ง SMS เพื่อยืนยันในขั้นตอนถัดไป
        </Text>
        <Text style={[styles.label, { marginTop: 300 }]}>
          เมื่อเข้าสู่ระบบคุณได้ยอมรับเงื่อนไขและข้อตกลงและนโยบายความเป็นส่วนตัวของ
          ปลาวาฬ แล้ว
        </Text>
      </ScrollView>
    </SafeAreaView>
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
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "Prompt-Regular",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MobileVerify;
