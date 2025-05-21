import {SafeAreaView, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Header from './componets/Header/index';
export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={style.App}>
                <Header />
            </SafeAreaView>
        );
    }
}
const style = StyleSheet.create({
    App: {
        flex: 1,
        margin: 20,
        backgroundColor: 'white',
    },
});
