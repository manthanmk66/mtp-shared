import React from "react";
import { Button as RNEButton } from "@rneui/themed";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

type MButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger" | "default";
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
};

const MButton: React.FC<MButtonProps> = ({
  title,
  onPress,
  variant = "default",
  style,
  textStyle,
  disabled = false,
}) => {
  // Map variants to RNE button props
  const variantStyles: Record<string, any> = {
    primary: { buttonStyle: { backgroundColor: "#4CAF50" }, titleStyle: { color: "#FFFFFF" } },
    secondary: { buttonStyle: { backgroundColor: "#FF9800" }, titleStyle: { color: "#FFFFFF" } },
    danger: { buttonStyle: { backgroundColor: "#F44336" }, titleStyle: { color: "#FFFFFF" } },
    default: { buttonStyle: { backgroundColor: "#E0E0E0" }, titleStyle: { color: "#000000" } },
  };

  const { buttonStyle, titleStyle } = variantStyles[variant];

  return (
    <RNEButton
      title={title}
      onPress={onPress}
      disabled={disabled}
      buttonStyle={[buttonStyle, style]}
      titleStyle={[titleStyle, textStyle]}
      containerStyle={{ borderRadius: 10 }}
    />
  );
};

export default MButton;
