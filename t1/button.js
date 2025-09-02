import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "./colors";

const button = ({
  title,
  type,
  onPress
}: {
  title: string,
  type: "top" | "right" | "number",
  onPress: Function,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            type == "top"
              ? Colors.btnDark
              : type == "number"
              ? Colors.btni
              : type == "right"
              ? Colors.btnRight
              : Colors.right,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 40,
          color: type == "number" ? Colors.black : Colors.white,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default button;

const styles = StyleSheet.create({
  button: {
    height: 75,
    width: 75,
    borderRadius: 80,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.gray,
    
  },
});
