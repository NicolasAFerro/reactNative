import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
    render() {
        return (
            <View>
                <Text style={style.Title}>Olá</Text>
                <Text>Nicolas</Text>
            </View>
        );
    }
}
const style = StyleSheet.create({
    Title: {
        color: 'black',
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'red',
    },
    SubTitle: {
        color: 'black',
        fontSize: 10,
    },
});
