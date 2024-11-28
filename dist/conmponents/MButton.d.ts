import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
type MButtonProps = {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary" | "danger" | "default";
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
};
declare const MButton: React.FC<MButtonProps>;
export default MButton;
