import {ColorSchemeName} from 'react-native';

export type themeTypes = 'light' | 'dark';
export interface Props {
    currentTheme: themeTypes;
}
export interface colorSchemeProps {
    colorScheme: ColorSchemeName;
}
