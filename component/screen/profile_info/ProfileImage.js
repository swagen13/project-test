import React, { useState } from "react";
import { Image, View, Platform, Text, TouchableOpacity, Alert } from "react-native";
// import DatePicker from "react-native-date-picker";
import * as ImagePicker from "expo-image-picker";
import Button from "../../Button";

function ProfileImage() {
  const [image, setImage] = useState(null);
  const [errorMessages, setErrorMessages] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleClick = () => {
    Alert.alert("กรอกข้อมูลสำเร็จ")
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
          รูปภาพโปรไฟล์ (ไม่บังคับ)
        </Text>
      </View>
      <View></View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={require("../../../assets/images/camera.png")}
            style={{
              position: "absolute",
              zIndex: 4,
              width: 40,
              height: 30,
              marginTop: 130,
              marginLeft: 80,
            }}
          />
          <Image
            source={require("../../../assets/images/semicircle.png")}
            style={{
              position: "",
              zIndex: 3,
              opacity: 0.3,
              width: 200,
              height: 200,
            }}
          />
          <Image
            source={require("../../../assets/images/user.png")}
            style={{
              position: "absolute",
              zIndex: 1,
              opacity: 0.3,
              width: 186,
              height: 186,
              margin: 6,
            }}
          />
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: 200,
                height: 200,
                borderRadius: 150,
                zIndex: 2,
                position: "absolute",
              }}
            />
          )}
        </TouchableOpacity>
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

export default ProfileImage;
