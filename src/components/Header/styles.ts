import {Colors} from 'react-native/Libraries/NewAppScreen';

import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props => props.theme.colors.primary};
    margin-top: 40px;
    margin-left: 20px;
    border-width: 4px;
    border-color: ${props => props.theme.colors.secondary};
    border-radius: 4px;
`;
export const Title = styled.Text`
    color: ${props => props.theme.colors.onPrimary};
    font-size: 20px;
`;
export const Name = styled(Title)`
    color: ${props => props.theme.colors.onPrimary};
    font-size: 30px;
`;
