import { Button as RNButton, makeStyles } from '@rneui/themed';
import React from 'react';
const Button = ({ style, ...otherProps }) => {
    const styles = useStyles(otherProps);
    return <RNButton buttonStyle={[styles.buttonStyle, style]} {...otherProps}/>;
};
export { Button };
const useStyles = makeStyles((theme, props) => ({
    buttonStyle: {
        borderRadius: 10,
        height: 40,
        borderWidth: props.type === 'clear' ? 0 : 1,
        borderColor: props?.borderColor || theme.colors.primary,
    },
}));
