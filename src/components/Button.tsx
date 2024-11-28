import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";

const colorVariants = {
  primary: { backgroundColor: "#4CAF50", borderColor: "#4CAF50", textColor: "#FFFFFF" },
  secondary: { backgroundColor: "#FF9800", borderColor: "#FF9800", textColor: "#FFFFFF" },
  danger: { backgroundColor: "#F44336", borderColor: "#F44336", textColor: "#FFFFFF" },
  default: { backgroundColor: "#E0E0E0", borderColor: "#BDBDBD", textColor: "#000000" },
};

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: keyof typeof colorVariants;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "default",
  backgroundColor,
  borderColor,
  textColor,
  style,
  textStyle,
}) => {
  const variantColors = colorVariants[variant] || colorVariants.default;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        style,
        {
          backgroundColor: backgroundColor || variantColors.backgroundColor,
          borderColor: borderColor || variantColors.borderColor,
          borderWidth: 1,
        },
      ]}
    >
      <Text style={[styles.text, textStyle, { color: textColor || variantColors.textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
