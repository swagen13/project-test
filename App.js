import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  SafeAreaView,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import Login from "./component/screen/mobile_login/Login";
import OTPFrm from "./component/screen/mobile_login/OTPFrm";
import SocialLogin from "./component/screen/social_mobile/SocialLogin";
import MobileVerify from "./component/screen/social_mobile/MobileVerify";
import SocialOTP from "./component/screen/social_mobile/SocialOTP";
import Name from "./component/screen/profile_info/Name";
import AgeGender from "./component/screen/profile_info/AgeGender";
import ProfileImage from "./component/screen/profile_info/ProfileImage";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    //Screen Options

    <Drawer.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        drawerActiveBackgroundColor: "#FFC300",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#000",
        headerShown: true,
        headerTitle: true,
        headerTintColor: '#1E90FF'
      }}
    >
      <Drawer.Screen name="LoginScreen" component={Login} />
      <Drawer.Screen name="OTPScreen" component={OTPFrm} />
      <Drawer.Screen name="SocialLoginScreen" component={SocialLogin} />
      <Drawer.Screen name="MobileVerifyScreen" component={MobileVerify} />
      <Drawer.Screen name="SocialOTPScreen" component={SocialOTP} />
      <Drawer.Screen name="NameScreen" component={Name} />
      <Drawer.Screen name="AgeGenderScreen" component={AgeGender} />
      <Drawer.Screen name="ProfileImageScreen" component={ProfileImage} />
    </Drawer.Navigator>
  );
}

export default function App() {
  //Fonts
  const [loaded] = useFonts({
    "Prompt-Regular": require("./assets/fonts/Prompt-Regular.ttf"),
    "Prompt-Bold": require("./assets/fonts/Prompt-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});
