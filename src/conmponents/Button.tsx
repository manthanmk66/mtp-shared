import { Button as RNButton, makeStyles, ButtonProps } from "@rneui/themed";
import React from "react";

// Define the ButtonProps type, including the backgroundColor
type Props = ButtonProps & {
  backgroundColor?: string; // Add backgroundColor prop
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

const useStyles = makeStyles((theme, props: Props) => ({
  buttonStyle: {
    borderRadius: 0,
    height: 40,
    borderWidth: props.type === "clear" ? 0 : 1,
    borderColor: props?.borderColor || theme.colors.primary,
    backgroundColor: props.backgroundColor || theme.colors.primary, // Use backgroundColor from props or theme
  },
}));
