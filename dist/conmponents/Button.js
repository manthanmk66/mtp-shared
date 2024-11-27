import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
const Button = ({ title, onPress, variant = "default", // Default to 'default' if no variant is provided
backgroundColor, borderColor, style, }) => {
    // Define default styles for variants
    const variantStyles = {
        primary: {
            backgroundColor: "#4CAF50", // Green
            borderColor: "#388E3C",
        },
        secondary: {
            backgroundColor: "#FF9800", // Orange
            borderColor: "#F57C00",
        },
        default: {
            backgroundColor: "#e0e0e0", // Grey
            borderColor: "#9e9e9e",
        },
    };
    // Select styles based on variant
    const selectedStyles = variantStyles[variant] || variantStyles.default;
    return (<TouchableOpacity onPress={onPress} style={[
            styles.button,
            selectedStyles,
            { backgroundColor, borderColor }, // Allow overrides from props
            style, // Allow custom styles from props
        ]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>);
};
export default Button;
// Define base styles
const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        paddingHorizontal: 16,
    },
    text: {
        color: "#fff", // Default text color
        fontSize: 16,
    },
});
