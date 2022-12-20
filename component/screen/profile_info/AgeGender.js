import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";
// import DatePicker from "react-native-date-picker";
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import Button from "../../Button";

function AgeGender() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // const [date, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log(date.getMonth());
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    hideDatePicker();
  };
  const monthName = moment(month+1).format("MMMM");

  const handleClick = () => {
    const newErrorMessages = [];
    if (day === "" || month === "" || year === "") {
      newErrorMessages.push("กรุณกรอกวันเกิด");
    } else {
      newErrorMessages.push("");
    }
    if (gender === "") {
      newErrorMessages.push("กรุณกรอกเพศ");
    }
    setErrorMessages(newErrorMessages);
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
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        {/* <DatePicker date={date} onDateChange={setDate} /> */}
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
          วันเกิดและเพศ
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Prompt-Regular",
            fontSize: 14,
          }}
        >
          วันเกิด
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TextInput
            value={day.toString()}
            editable={false}
            onTouchStart={showDatePicker}
            placeholder="วัน"
            style={{
              width: 70,
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
          />
          <TextInput
            editable={false}
            placeholder="เดือน"
            onTouchStart={showDatePicker}
            style={{
              width: 150,
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              marginVertical: 5,
              fontFamily: "Prompt-Regular",
              paddingLeft: 20,
              borderColor: errorMessages[0] ? "red" : "#D6D6D6",
              backgroundColor: "white",
              marginLeft: 20,
            }}
            value={monthName}
          />
          <TextInput
            editable={false}
            placeholder="ปี"
            onTouchStart={showDatePicker}
            style={{
              width: 110,
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              marginVertical: 5,
              fontFamily: "Prompt-Regular",
              paddingLeft: 20,
              borderColor: errorMessages[0] ? "red" : "#D6D6D6",
              backgroundColor: "white",
              marginLeft: 20,
            }}
            value={year.toString()}
          />
        </View>
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
          เพศ
        </Text>

        <View>
          <TextInput
            editable={false}
            onTouchStart={() => setIsVisible(!isVisible)}
            placeholder="กรุณเลือกเพศ"
            style={{
              width: "100%",
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
            value={gender}
          />
          <Text style={{ color: "red", fontFamily: "Prompt-Regular" }}>
            {errorMessages[1]}
          </Text>
          <Picker style={{ opacity: isVisible ? 1 : 0 }}>
            <Picker.Item label="ชาย" value="male" />
            <Picker.Item label="หญิง" value="female" />
          </Picker>
        </View>
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
          onPress={() => handleClick()}
        />
      </View>
    </View>
  );
}

export default AgeGender;
