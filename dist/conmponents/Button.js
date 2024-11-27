import { Button as RNButton, makeStyles } from "@rneui/themed";
import React from "react";
const Button = ({ title, style, backgroundColor, ...otherProps }) => {
    const styles = useStyles({ backgroundColor, ...otherProps }); // Pass backgroundColor to useStyles
    return (<RNButton buttonStyle={[styles.buttonStyle, style]} // Apply combined styles
     title={title} {...otherProps} // Spread other props (e.g., onPress, type)
    />);
};
export { Button };
const useStyles = makeStyles((theme, props) => ({
    buttonStyle: {
        borderRadius: 0,
        height: 40,
        borderWidth: props.type === "clear" ? 0 : 1,
        borderColor: props?.borderColor || theme.colors.primary,
        backgroundColor: props.backgroundColor || theme.colors.primary, // Use backgroundColor from props or theme
    },
}));
