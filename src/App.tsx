import {SafeAreaView, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Header from './componets/Header/Index';

export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={style.App}>
                <Header name="Nicolas" title="learning React Native" />
            </SafeAreaView>
        );
    }
}
const style = StyleSheet.create({
    App: {
        flex: 1,
        /* margin: 20, */
        backgroundColor: 'white',
    },
});
