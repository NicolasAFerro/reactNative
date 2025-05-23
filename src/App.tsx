import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header/Header';
import {ThemeProvider} from 'styled-components/native';
import {themeDark} from './constants/styles/themes/dark';
import {themeLight} from './constants/styles/themes/light';
import Button from './components/Button/Button';
import useApperence from './hooks/useApperence/useApperence';

const App = () => {
    const {currentTheme} = useApperence();

    return (
        <ThemeProvider
            theme={currentTheme === 'light' ? themeLight : themeDark}>
            <SafeAreaView style={style.App}>
                <Header />
                <Button onPress={() => {}}></Button>
            </SafeAreaView>
        </ThemeProvider>
    );
};

export default App;

const style = StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor: 'black',
    },
});
