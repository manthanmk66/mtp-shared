import React from "react";
import { ViewStyle, TextStyle } from "react-native";
declare const colorVariants: {
    primary: {
        backgroundColor: string;
        borderColor: string;
        textColor: string;
    };
    secondary: {
        backgroundColor: string;
        borderColor: string;
        textColor: string;
    };
    danger: {
        backgroundColor: string;
        borderColor: string;
        textColor: string;
    };
    default: {
        backgroundColor: string;
        borderColor: string;
        textColor: string;
    };
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
declare const Button: React.FC<ButtonProps>;
export default Button;
