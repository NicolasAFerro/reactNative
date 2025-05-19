import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {Component} from 'react';

export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={style.App}>
                <Text style={style.Title}>hello toquei o titulo</Text>
            </SafeAreaView>
        );
    }
}
const style = StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    Title: {
        color: 'white',
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'red',
    },
});
