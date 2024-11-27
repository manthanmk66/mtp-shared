import React from "react";
import { Button as RNButton, makeStyles, ButtonProps, Theme } from "@rneui/themed";

// Define the ButtonProps type, including backgroundColor and borderColor
type Props = ButtonProps & {
  backgroundColor?: string; // Optional backgroundColor
  borderColor?: string; // Optional borderColor
};

const Button = ({ title, style, backgroundColor, ...otherProps }: Props) => {
  const styles = useStyles({ backgroundColor, ...otherProps }); // Pass backgroundColor to useStyles
  return (
    <RNButton
      buttonStyle={[styles.buttonStyle, style]} // Apply combined styles
      title={title}
      {...otherProps} // Spread other props (e.g., onPress, type)
    />
  );
};

export { Button };

// Define the theme
const theme: Theme = {
  mode: "light",
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  colors: {
    primary: "#4CAF50", // Green for primary button
    secondary: "#FF9800", // Orange for secondary button
    background: "#f5f5f5", 
  },
};

export default theme;

// UseStyles hook for the button component
const useStyles = makeStyles((theme, props: Props) => ({
  buttonStyle: {
    borderRadius: 10, // Rounded corners for the button
    height: 40, // Set button height
    borderWidth: props.type === "clear" ? 0 : 1, // No border for 'clear' type buttons
    borderColor: props?.borderColor || theme.colors.primary, // Use passed borderColor or theme.primary
    backgroundColor: props.backgroundColor || theme.colors.primary, 
  },
}));
