import { Button as RNButton, ButtonProps, makeStyles } from '@rneui/themed';
import React from 'react';

type Props = ButtonProps & {
  borderColor?: string;
};

const Button = ({ title, style, ...otherProps }: Props) => {
  const styles = useStyles(otherProps);

  return (
    <RNButton
      buttonStyle={[styles.buttonStyle, style]} 
      title={title}  
      {...otherProps}
    />
  );
};

export { Button };

const useStyles = makeStyles((theme, props: Props) => ({
  buttonStyle: {
    borderRadius: 10,
    height: 40,
    borderWidth: props.type === 'clear' ? 0 : 1,
    borderColor: props?.borderColor || theme.colors.primary,
  },
}));
