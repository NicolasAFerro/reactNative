import React, {useCallback, useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import {Props, themeTypes, colorSchemeProps} from './types';

const useApperence = () => {
    const [currentTheme, setCurrentTheme] = useState<themeTypes>(
        Appearance.getColorScheme() || 'light',
    );

    const handleChangeApparence = useCallback(
        ({colorScheme}: colorSchemeProps) => {
            if (colorScheme) setCurrentTheme(colorScheme);
        },
    );

    useEffect(() => {
        Appearance.addChangeListener(colorScheme =>
            handleChangeApparence(colorScheme),
        );
        return () => Appearance.removeChangeListener(handleChangeApparence);
    }, [handleChangeApparence]);
    return {currentTheme};
};

export default useApperence;
