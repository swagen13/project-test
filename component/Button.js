import react from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ title, color, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 55,
        width: "100%",
        backgroundColor: color,
        justifyContent: "center",
        borderRadius: 5,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontFamily: "Prompt-Regular",
          color: "white",
          fontSize: 20,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
