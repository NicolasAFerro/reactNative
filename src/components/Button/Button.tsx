import {Button as ButtonRN} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';

type Props = {
    onPress: () => void;
};

const Button = ({onPress}: Props) => {
    const themeContext = useContext(ThemeContext);
    return (
        <ButtonRN
            color={themeContext.colors.secondary}
            title="Change Theme"
            onPress={onPress}
        />
    );
};

export default Button;
